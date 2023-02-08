package com.codecool.liveMessenger.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/register")
public class RegistrationController {
    private String name;

    @GetMapping
    public String displayRegistration(Model model) {
        model.addAttribute("name", name != null ? name : "null");
        return "register";
    }

    @PostMapping
    public String sendRegisterInfo(@RequestParam String register_name) {
        name = register_name;
        return "redirect:";
    }
}
