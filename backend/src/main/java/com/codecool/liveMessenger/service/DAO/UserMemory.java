package com.codecool.liveMessenger.service.DAO;

import com.codecool.liveMessenger.model.User;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Repository
public class UserMemory implements UserDAO {
    private Set<User> users = new HashSet<>();

    @Override
    public Set<User> getUsers() {
        return users;
    }

    @Override
    public User getUser(UUID userId) {
        return users.stream()
                .filter(user -> user.getUserId().equals(userId))
                .findFirst().orElse(null);
    }

    @Override
    public void addUser(User user) {
        users.add(user);
    }

    @Override
    public void deleteUser(UUID userId) {
        users.remove(userId);
    }

    @Override
    public void updateUserName(UUID userId, String userName) {
        getUser(userId).setUserName(userName);
    }
}
