package com.vaishali.heritage.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChatRequest {

    @NotBlank(message = "Message is required")
    private String message;

    private String sessionId;
}
