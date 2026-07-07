package com.vaishali.heritage.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PlaceRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Category is required")
    private String category;

    private String type;

    private String image;

    private String distance;

    private String builtIn;

    private String height;

    private String material;

    private String bestTime;

    private String weather;

    private String description;

    private String history;

    private double latitude;

    private double longitude;
}
