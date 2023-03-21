package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.ChatUser;
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
    public List<ChatUser> displayUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public ChatUser getUser(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }

    @PostMapping
    public void registerUser(@RequestBody ChatUser chatUser) {
        ChatUser builtChatUser = ChatUser.builder().userName(chatUser.getUserName())
                .email(chatUser.getEmail())
                .password(chatUser.getPassword()).build();
        userService.addUser(builtChatUser);
    }
}
