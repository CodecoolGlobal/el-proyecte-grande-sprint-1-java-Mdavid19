package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.security.request.AuthenticationRequest;
import com.codecool.liveMessenger.security.response.AuthenticationResponse;
import com.codecool.liveMessenger.service.AuthenticationService;
import com.codecool.liveMessenger.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class LoginController {

    private AuthenticationService service;

    @PostMapping
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.ok(service.authenticate(request));
    }
}
