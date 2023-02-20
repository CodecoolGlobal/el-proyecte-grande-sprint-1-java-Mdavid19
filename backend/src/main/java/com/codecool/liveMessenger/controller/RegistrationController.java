package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.service.UserService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {
    private UserService userService;

//    @GetMapping
//    public String displayRegistration(Model model) {
//        model.addAttribute("name", name != null ? name : null);
//        return name;
//    }
//
//    @PostMapping
//    public String sendRegisterInfo(@RequestParam String register_name) {
//        name = register_name;
//        return name;
//    }
}
