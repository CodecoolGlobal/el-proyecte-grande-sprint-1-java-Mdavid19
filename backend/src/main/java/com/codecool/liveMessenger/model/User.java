package com.codecool.liveMessenger.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Builder
public class User {
    private String userName;
    private String email;
    private String password;
    @Builder.Default
    private UUID userId = UUID.randomUUID();
    @Builder.Default
    private String statusMessage = null;

    public User(String userName, String email, String password, UUID userId, String statusMessage) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userId = userId;
        this.statusMessage = statusMessage;
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
}
