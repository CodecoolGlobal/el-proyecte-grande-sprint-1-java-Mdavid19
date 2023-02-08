package com.codecool.liveMessenger.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserProfileController {

    @GetMapping("/user-profile")
    public String userProfile() {
        return "Here you will be able to change your data";
    }
}
