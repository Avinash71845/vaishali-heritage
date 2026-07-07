package com.vaishali.heritage.repository;

import com.vaishali.heritage.model.ChatMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatMessageRepository extends MongoRepository<ChatMessage, String> {

    List<ChatMessage> findBySessionIdOrderByCreatedAtAsc(String sessionId);

    List<ChatMessage> findByUserIdOrderByCreatedAtDesc(String userId);
}
