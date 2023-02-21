package com.codecool.liveMessenger.service.DAO;

import com.codecool.liveMessenger.model.User;

import java.util.Set;
import java.util.UUID;

public interface UserDAO {
    Set<User> getUsers();
    User getUser(UUID userId);
    void addUser(User user);
    void deleteUser(UUID userId);
    void updateUserName(UUID userId, String userName);
}
