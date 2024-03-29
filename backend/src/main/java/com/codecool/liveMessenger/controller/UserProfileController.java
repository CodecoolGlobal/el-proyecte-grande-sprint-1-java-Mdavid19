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


    @PostMapping
    public void saveUserInfoChange(@RequestBody Map<String, String> data) {
        userService.updateUserInfo(data);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> handleUploadFile(@RequestPart("file") MultipartFile file, @RequestPart("pictureType") String pictureType, @RequestPart("userId") String userId) {
        String fileName = file.getOriginalFilename();

        try {
            file.transferTo(new File("/home/tamas/Projects/Advance/week_1/el-proyecte-grande-sprint-1-java-Mdavid19/user_pictures", fileName));
            userService.saveUserPicture(Long.parseLong(userId), pictureType, fileName);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok("File uploaded successfully");
    }
}
