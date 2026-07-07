package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.ChatRequest;
import com.vaishali.heritage.dto.response.ChatResponse;
import com.vaishali.heritage.model.ChatMessage;
import com.vaishali.heritage.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AiChatService {

    private final AiClientService aiClientService;
    private final ChatMessageRepository chatMessageRepository;

    private static final String SYSTEM_PROMPT =
            "You are an AI Tour Guide for Vaishali, an ancient heritage city in Bihar, India, "
                    + "known as the birthplace of Lord Mahavira and a significant place in Lord Buddha's life. "
                    + "Answer visitor questions about its history, monuments, culture and travel tips concisely, "
                    + "in a warm and informative tone, in 2-4 sentences.";

    private static final List<String> FALLBACK_REPLIES = List.of(
            "Vaishali is one of the oldest republics in the world, dating back to the 6th century BCE.",
            "Lord Mahavira, the founder of Jainism, was born in Vaishali around 599 BCE.",
            "Lord Buddha visited Vaishali several times and gave his last sermon here before traveling to Kushinagar.",
            "The Ashokan Pillar stands as a symbol of peace, built during Emperor Ashoka's reign in the 3rd century BCE."
    );

    public ChatResponse chat(String userId, ChatRequest request) {
        String sessionId = request.getSessionId() != null ? request.getSessionId() : UUID.randomUUID().toString();

        chatMessageRepository.save(ChatMessage.builder()
                .userId(userId)
                .sessionId(sessionId)
                .role("user")
                .message(request.getMessage())
                .createdAt(Instant.now())
                .build());

        String aiReply = aiClientService.ask(SYSTEM_PROMPT, request.getMessage());
        if (aiReply == null || aiReply.isBlank()) {
            aiReply = FALLBACK_REPLIES.get(new Random().nextInt(FALLBACK_REPLIES.size()));
        }

        chatMessageRepository.save(ChatMessage.builder()
                .userId(userId)
                .sessionId(sessionId)
                .role("ai")
                .message(aiReply)
                .createdAt(Instant.now())
                .build());

        return ChatResponse.builder().reply(aiReply).sessionId(sessionId).build();
    }

    public List<ChatMessage> getHistory(String sessionId) {
        return chatMessageRepository.findBySessionIdOrderByCreatedAtAsc(sessionId);
    }
}
