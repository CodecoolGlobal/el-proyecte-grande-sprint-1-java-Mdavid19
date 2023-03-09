package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/chat-user-profile")
public class UserProfileController {

    UserService userService;

    public UserProfileController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void saveUserInfoChange(@RequestBody Map<String, String> data) {
//      TODO  in session will be the user id just for testing we gave an id
        userService.updateUserInfo(1L, data);
    }
}
