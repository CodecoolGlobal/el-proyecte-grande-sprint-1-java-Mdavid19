package com.codecool.liveMessenger.controller;


import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.model.DTO.FriendDTO;
import com.codecool.liveMessenger.model.Message;
import com.codecool.liveMessenger.service.MessageService;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class ChatPageController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverId().toString(), "/private", message);// /user/receiver_id/private  this is where should the user listen
        message.setDate(LocalDate.now());
        messageService.saveMessage(message);
        return message;
    }

    @PostMapping("/api/add-friend")
    public void addFriend(@RequestBody Map<String, String> email) {
        ChatUser user = userService.getUserByEmail(email.get("userEmail"));
        ChatUser friend = userService.getUserByEmail(email.get("email"));

        userService.addFollower(user, friend);
        userService.addFollowing(user, friend);
    }

    @GetMapping("/api/get-friends")
    public List<FriendDTO> getFriends(@RequestParam Long id) {
        var chatUser = userService.getUserById(id);
        return userService.getFriends(chatUser);
    }
}
