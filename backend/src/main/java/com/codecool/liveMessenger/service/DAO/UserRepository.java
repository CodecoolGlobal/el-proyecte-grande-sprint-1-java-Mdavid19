package com.codecool.liveMessenger.service.DAO;

import com.codecool.liveMessenger.model.ChatUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<ChatUser, Long> {
    ChatUser findUserById(Long userId);
    ChatUser findUserByEmail(String email);
}
