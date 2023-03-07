package com.codecool.liveMessenger.model.repositories;


import com.codecool.liveMessenger.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    public List<Message> getMessagesBySenderIdAndReceiverId(Long senderId, Long receiverId);
}
