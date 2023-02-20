package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.User;
import com.codecool.liveMessenger.service.DAO.UserDAO;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class UserService {
    private UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public Set<User> getUsers() {
        return userDAO.getUsers();
    }

    public User getUser(UUID userId) {
        return userDAO.getUser(userId);
    }

    public void addUser(User user) {
        userDAO.addUser(user);
    }

    public void deleteUser(UUID userId) {
        userDAO.deleteUser(userId);
    }

    public void updateUser(UUID userId, String userName) {
        userDAO.updateUserName(userId, userName);
    }
}
