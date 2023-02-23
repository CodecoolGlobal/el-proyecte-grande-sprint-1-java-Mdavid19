package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.User;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/register")
public class RegistrationController {
    private UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public Set<User> displayUsers() {
        return userService.getUsers();
    }

    @GetMapping
    public User getUser(UUID userId) {
        return userService.getUser(userId);
    }

    @PostMapping
    public void registerUser(@RequestBody User user) {
        User builtUser = User.builder().userName(user.getUserName())
                .email(user.getEmail())
                .password(user.getPassword()).build();
        userService.addUser(builtUser);
    }
}
