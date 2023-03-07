package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.Chatter;
import com.codecool.liveMessenger.service.DAO.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Chatter> getUsers() {
        return userRepository.findAll();
    }

    public Chatter getUser(Long userId) {
        return userRepository.findUserById(userId);
    }

    public void addUser(Chatter chatter) {
        userRepository.save(chatter);
    }

    public Chatter getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public void deleteUser(Long userId) {
        if (userRepository.findUserById(userId) != null) {
            userRepository.deleteById(userId);
        }
    }

    public void updateUserName(Long userId, String userName) {
        Chatter chatterToUpdate = userRepository.findUserById(userId);
        chatterToUpdate.setUserName(userName);
        userRepository.save(chatterToUpdate);
    }
}
