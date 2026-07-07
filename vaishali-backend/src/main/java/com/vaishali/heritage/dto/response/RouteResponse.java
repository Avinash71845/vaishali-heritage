package com.vaishali.heritage.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RouteResponse {

    private List<RouteStop> stops;

    private double totalDistanceKm;

    private String estimatedTime;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RouteStop {
        private String placeId;
        private String name;
        private double distanceFromPreviousKm;
        private int order;
    }
}
