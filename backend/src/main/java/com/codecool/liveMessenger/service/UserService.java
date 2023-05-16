package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.model.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
        return userRepository.findUserByEmail(email).orElse(null);
    }

    public void deleteUser(Long userId) {
        if (userRepository.findUserById(userId) != null) {
            userRepository.deleteById(userId);
        }
    }

    public void updateUserInfo(Long userId, Map<String, String> userInfo) {
        ChatUser chatUserToUpdate = userRepository.findUserById(userId);
        if (userInfo.get("fieldName").equals("userName")) {
            updateUserName(chatUserToUpdate, userInfo.get("userInfo"));
        } else if (userInfo.get("fieldName").equals("email")) {
            updateUserEmail(chatUserToUpdate, userInfo.get("userInfo"));
        } else if (userInfo.get("fieldName").equals("password")) {
            updateUserPassword(chatUserToUpdate, userInfo.get("userInfo"));
        } else if (userInfo.get("fieldName").equals("statusMessage")) {
            updateUserStatusMessage(chatUserToUpdate, userInfo.get("userInfo"));
        }
    }

    private void updateUserName(ChatUser user, String userName) {
        user.setChatUserName(userName);
        userRepository.save(user);
    }

    private void updateUserEmail(ChatUser user, String email) {
        user.setEmail(email);
        userRepository.save(user);
    }

    private void updateUserStatusMessage(ChatUser user, String message) {
        user.setStatusMessage(message);
        userRepository.save(user);
    }

    private void updateUserPassword(ChatUser user, String password) {
        user.setPassword(password);
        userRepository.save(user);
    }

    public void saveuserProfilePicture(Long userId, String profilePicture) {
        ChatUser chatUserToUpdate = userRepository.findUserById(userId);
        chatUserToUpdate.setProfilePicture(profilePicture);
        userRepository.save(chatUserToUpdate);
    }

    public void addFollower(ChatUser chatUser, ChatUser friend) {
        List<ChatUser> followers = chatUser.getFollower();
        followers.add(friend);
        userRepository.save(chatUser);
    }

    public void addFollowing(ChatUser chatUser, ChatUser friend) {
        List<ChatUser> following = friend.getFollowing();
        following.add(chatUser);
        userRepository.save(friend);
    }

    public List<ChatUser> getFriends(ChatUser chatUser){
        List<ChatUser> friends = new ArrayList<>(chatUser.getFollower());
        friends.addAll(chatUser.getFollowing());
        return friends;
    }
}
