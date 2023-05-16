package com.codecool.liveMessenger.model.repositories;

import com.codecool.liveMessenger.model.ChatUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<ChatUser, Long> {
    ChatUser findUserById(Long userId);
    Optional<ChatUser> findUserByEmail(String email);
}
