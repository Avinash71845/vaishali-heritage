package com.vaishali.heritage.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "places")
public class Place {

    @Id
    private String id;

    private String name;

    private String category;

    private String type;

    private String image;

    private double rating;

    private int reviewsCount;

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

    private Instant createdAt;

    private Instant updatedAt;
}
