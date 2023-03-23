package com.codecool.liveMessenger.security.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String chatUserName;
    private String chatUserPassword;
    private String chatUserEmail;

}
