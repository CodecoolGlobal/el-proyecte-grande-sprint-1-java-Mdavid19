package com.codecool.liveMessenger.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Token{
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Id
    public Long id;

    @Column(unique = true)
    public String token;

    @Enumerated(EnumType.STRING)
    TokenType tokenType = TokenType.BEARER;

    public boolean revoked;

    public boolean expired;

    @ManyToOne
    @JoinColumn(name = "chat_user_id")
    public ChatUser user;
}
