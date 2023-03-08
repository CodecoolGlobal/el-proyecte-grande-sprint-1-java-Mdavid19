package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.service.DAO.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<ChatUser> getUsers() {
        return userRepository.findAll();
    }

    public ChatUser getUserById(Long userId) {
        return userRepository.findUserById(userId);
    }

    public void addUser(ChatUser chatUser) {
        userRepository.save(chatUser);
    }

    public ChatUser getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public void deleteUser(Long userId) {
        if (userRepository.findUserById(userId) != null) {
            userRepository.deleteById(userId);
        }
    }

    public void updateUserName(Long userId, String userName) {
        ChatUser chatUserToUpdate = userRepository.findUserById(userId);
        chatUserToUpdate.setUserName(userName);
        userRepository.save(chatUserToUpdate);
    }
}
