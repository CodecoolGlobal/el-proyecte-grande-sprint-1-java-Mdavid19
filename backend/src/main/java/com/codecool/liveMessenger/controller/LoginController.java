package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class LoginController {
    private UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public boolean Login(@RequestBody String email) {
        return (userService.getUserByEmail(email) != null);
    }
}
