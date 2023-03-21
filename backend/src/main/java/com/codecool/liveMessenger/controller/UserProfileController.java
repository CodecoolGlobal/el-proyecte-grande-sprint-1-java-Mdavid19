package com.codecool.liveMessenger.controller;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Map;

@RestController
@RequestMapping("/chat-user-profile")
public class UserProfileController {

    UserService userService;

    public UserProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getUserName() {
//     TODO later change id to session id
        ChatUser user = userService.getUserById(1L);
        return user.getUserName();
    }

    @PostMapping
    public void saveUserInfoChange(@RequestBody Map<String, String> data) {
//      TODO  in session will be the user id just for testing we gave an id
        userService.updateUserInfo(1L, data);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> handleUploadFile(@RequestPart("file") MultipartFile file, @RequestPart("pictureType") String pictureType) {
        String fileName = file.getOriginalFilename();

        try {
            file.transferTo(new File("/home/tamas/Projects/Advance/week_1/el-proyecte-grande-sprint-1-java-Mdavid19/user_pictures", fileName));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok("File uploaded successfully");
    }
}
