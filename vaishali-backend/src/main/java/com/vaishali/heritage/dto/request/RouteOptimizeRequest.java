package com.vaishali.heritage.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class RouteOptimizeRequest {

    @NotEmpty(message = "At least one place id is required")
    private List<String> placeIds;

    private String startingPoint;
}
