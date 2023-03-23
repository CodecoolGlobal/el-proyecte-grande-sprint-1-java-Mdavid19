package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.security.request.RegisterRequest;
import com.codecool.liveMessenger.security.response.AuthenticationResponse;
import com.codecool.liveMessenger.service.AuthenticationService;
import com.codecool.liveMessenger.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/register")
@RequiredArgsConstructor
public class RegistrationController {
    private UserService userService;
    @Autowired
    private AuthenticationService authService;


    @GetMapping("/all")
    public List<ChatUser> displayUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public ChatUser getUser(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }

    @PostMapping
    public ResponseEntity<AuthenticationResponse> registerUser(@RequestBody RegisterRequest request) {
       return ResponseEntity.ok(authService.register(request));
    }
}
