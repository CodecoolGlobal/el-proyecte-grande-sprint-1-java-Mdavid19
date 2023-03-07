package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.Chatter;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/register")
public class RegistrationController {
    private UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<Chatter> displayUsers() {
        return userService.getUsers();
    }

    @GetMapping
    public Chatter getUser(Long userId) {
        return userService.getUser(userId);
    }

    @PostMapping
    public void registerUser(@RequestBody Chatter chatter) {
        Chatter builtChatter = Chatter.builder().userName(chatter.getUserName())
                .email(chatter.getEmail())
                .password(chatter.getPassword()).build();
        userService.addUser(builtChatter);
    }
}
