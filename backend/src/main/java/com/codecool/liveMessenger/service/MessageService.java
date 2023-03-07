package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.Message;
import com.codecool.liveMessenger.model.repositories.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    public void saveMessage(Message message) {
        messageRepository.save(message);
    }

    public void deleteMessageById(Long messageId) {
        messageRepository.deleteById(messageId);
    }

    public List<Message> getMessagesBetweenUsers(Long senderId, Long receiverId) {
        return messageRepository.getMessagesBySenderIdAndReceiverId(senderId, receiverId);
    }

}
