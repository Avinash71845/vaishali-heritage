package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.request.ChatRequest;
import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.dto.response.ChatResponse;
import com.vaishali.heritage.model.ChatMessage;
import com.vaishali.heritage.service.AiChatService;
import com.vaishali.heritage.util.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final AiChatService aiChatService;

    @PostMapping("/chat")
    public ApiResponse<ChatResponse> chat(@Valid @RequestBody ChatRequest request) {
        String userId = SecurityUtils.getCurrentUserId();
        ChatResponse response = aiChatService.chat(userId == null ? "guest" : userId, request);
        return ApiResponse.success(response);
    }

    @GetMapping("/chat/history/{sessionId}")
    public ApiResponse<List<ChatMessage>> getHistory(@PathVariable String sessionId) {
        return ApiResponse.success(aiChatService.getHistory(sessionId));
    }
}
