package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.security.JwtAuthenticationFilter;
import com.codecool.liveMessenger.security.request.AuthenticationRequest;
import com.codecool.liveMessenger.security.response.AuthenticationResponse;
import com.codecool.liveMessenger.service.AuthenticationService;
import com.codecool.liveMessenger.service.JwtService;
import com.codecool.liveMessenger.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
@RequiredArgsConstructor
public class LoginController {
    @Autowired
    private AuthenticationService service;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/api/get-me")
    public ChatUser getMe(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        String jwtToken = token.substring(JwtAuthenticationFilter.JWT_TOKEN_START_INDEX);
        String email = jwtService.extractUserName(jwtToken);
        return userService.getUserByEmail(email);
    }
}
