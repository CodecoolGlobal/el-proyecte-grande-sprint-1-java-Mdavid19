package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.User;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/register")
public class RegistrationController {
    private UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }
@GetMapping
    public Set<User> displayUsers() {
        return userService.getUsers();
    }
}
