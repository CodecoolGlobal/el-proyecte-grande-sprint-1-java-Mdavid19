package com.codecool.liveMessenger.data_sample;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserCreator {
    private final UserService userService;

    public void initialize() {
        userService.addUser(ChatUser.builder().userName("Sanyi").email("sanyi@vagyok.hu").password("password").build());
    }

    @Autowired
    public UserCreator(UserService userService) {
        this.userService = userService;
        initialize();
    }
}
