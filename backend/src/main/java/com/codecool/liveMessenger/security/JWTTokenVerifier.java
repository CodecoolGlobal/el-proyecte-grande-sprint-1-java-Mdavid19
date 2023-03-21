package com.codecool.liveMessenger.security;


import org.springframework.stereotype.Component;

@Component
public class JWTTokenVerifier {
    @Value("${SECRET_KEY}")
}
