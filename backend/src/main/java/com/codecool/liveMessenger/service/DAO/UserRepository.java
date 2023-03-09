package com.codecool.liveMessenger.service.DAO;

import com.codecool.liveMessenger.model.ChatUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<ChatUser, Long> {
    ChatUser findUserById(Long userId);
    ChatUser findUserByEmail(String email);
}
