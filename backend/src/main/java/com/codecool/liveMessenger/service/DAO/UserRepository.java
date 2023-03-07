package com.codecool.liveMessenger.service.DAO;

import com.codecool.liveMessenger.model.Chatter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Chatter, Long> {
    Chatter findUserById(Long userId);
    Chatter findUserByEmail(String email);
}
