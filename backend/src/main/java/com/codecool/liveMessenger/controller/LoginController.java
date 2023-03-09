package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class LoginController {
    private UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public boolean Login(@RequestBody Map<String, String> userInfo) {
        return userService.getUserByEmail(userInfo.get("userEmail")) != null;
    }
}
