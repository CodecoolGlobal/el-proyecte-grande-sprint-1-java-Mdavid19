package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.Message;
import com.codecool.liveMessenger.service.MessageService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/message")
public class MessageApiController {

    MessageService messageService;

    public MessageApiController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    private void saveMessage(@RequestBody Map<String,String> payload){
        Message message = Message.builder()
                .content(payload.get("content"))
                .date(LocalDate.now())
                .senderId(Long.parseLong(payload.get("senderId")))
                .receiverId(Long.parseLong(payload.get("receiverId")))
                .build();

        messageService.saveMessage(message);

    }

    @GetMapping
    private List<Message> getAllMessage(){
        return messageService.getAllMessage();
    }




}
