package com.vaishali.heritage.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "trips")
public class Trip {

    @Id
    private String id;

    private String userId;

    private int days;

    private String budget;

    private List<String> interests;

    private String startingPoint;

    private List<DayPlan> itinerary;

    private double totalDistanceKm;

    private String estimatedTime;

    @CreatedDate
    private Instant createdAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DayPlan {
        private int dayNumber;
        private List<ItineraryStop> stops;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ItineraryStop {
        private String time;
        private String placeId;
        private String placeName;
        private String placeImage;
        private String distanceFromPrevious;
    }
}
