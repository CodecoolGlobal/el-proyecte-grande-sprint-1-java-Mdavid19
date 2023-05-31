package com.codecool.liveMessenger.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
@Transactional
public class ChatUser implements UserDetails {

    private String chatUserName;
    @Column(unique = true)
    private String email;
    private String password;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Builder.Default
    private String statusMessage = null;
    private String profilePicture;
    private String coverPicture;

    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonManagedReference
    @ManyToMany(mappedBy = "following")
    private List<ChatUser> follower = new ArrayList<>();

    @JsonBackReference
    @ManyToMany
    private List<ChatUser> following = new ArrayList<>();

    @Transient
    @OneToMany(mappedBy = "user")
    List<Token> tokens;


    public void setChatUserName(String userName) {
        this.chatUserName = userName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void addFollower(List<ChatUser> friends) {
       follower = friends;
    }

    public void addFollowing(List<ChatUser> friends){
        following = friends;
    }

    @Override
    public String toString() {
        return "ChatUser{" +
                "chatUserName='" + chatUserName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", id=" + id +
                ", statusMessage='" + statusMessage + '\'' +
                ", profilePicture='" + profilePicture + '\'' +
                ", coverPicture='" + coverPicture + '\'' +
                ", role=" + role +
                ", tokens=" + tokens +
                '}';
    }
}
