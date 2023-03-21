package com.codecool.liveMessenger.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ChatPageController {

    @GetMapping("/user")
    public String showMainPageAfterLogin(){
        return "Hello this is the Main page";
    }

}
