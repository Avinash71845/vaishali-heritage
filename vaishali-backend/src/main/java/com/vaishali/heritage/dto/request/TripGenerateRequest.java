package com.vaishali.heritage.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class TripGenerateRequest {

    @Min(value = 1, message = "Days must be at least 1")
    @Max(value = 14, message = "Days cannot exceed 14")
    private int days;

    @NotBlank(message = "Budget is required")
    private String budget;

    @NotEmpty(message = "At least one interest is required")
    private List<String> interests;

    @NotBlank(message = "Starting point is required")
    private String startingPoint;
}
