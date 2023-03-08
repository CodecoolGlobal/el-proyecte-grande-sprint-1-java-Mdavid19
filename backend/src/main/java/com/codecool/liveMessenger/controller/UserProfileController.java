package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-profile")
public class UserProfileController {

    UserService userService;

    public UserProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String userProfile() {
        return "Here you will be able to change your data";
    }

    @PostMapping
    public void saveUserInfoChange(@RequestBody String data) {
        userService.updateUserName(1L, data);
    }
}
