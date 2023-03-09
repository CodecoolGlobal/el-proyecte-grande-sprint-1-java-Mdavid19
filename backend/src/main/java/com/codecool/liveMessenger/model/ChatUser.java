package com.codecool.liveMessenger.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Builder
public class ChatUser {
    private String userName;
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

    public ChatUser(String userName, String email, String password, Long id, String statusMessage, String profilePicture, String coverPicture) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.id = id;
        this.statusMessage = statusMessage;
        this.profilePicture = profilePicture;
        this.coverPicture = coverPicture;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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
}
