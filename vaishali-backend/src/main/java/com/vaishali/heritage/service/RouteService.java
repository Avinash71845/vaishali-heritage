package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.RouteOptimizeRequest;
import com.vaishali.heritage.dto.response.RouteResponse;
import com.vaishali.heritage.model.Place;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RouteService {

    private final PlaceService placeService;

    public RouteResponse optimizeRoute(RouteOptimizeRequest request) {
        List<Place> places = new ArrayList<>();
        for (String id : request.getPlaceIds()) {
            places.add(placeService.getPlaceById(id));
        }

        List<RouteResponse.RouteStop> stops = new ArrayList<>();
        List<Place> remaining = new ArrayList<>(places);
        double totalDistance = 0;
        int order = 1;

        double currentLat = places.isEmpty() ? 0 : places.get(0).getLatitude();
        double currentLng = places.isEmpty() ? 0 : places.get(0).getLongitude();

        while (!remaining.isEmpty()) {
            Place nearest = null;
            double nearestDistance = Double.MAX_VALUE;

            for (Place candidate : remaining) {
                double distance = haversine(currentLat, currentLng, candidate.getLatitude(), candidate.getLongitude());
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearest = candidate;
                }
            }

            if (nearest == null) break;

            double distanceFromPrevious = (order == 1) ? 0 : nearestDistance;
            totalDistance += distanceFromPrevious;

            stops.add(RouteResponse.RouteStop.builder()
                    .placeId(nearest.getId())
                    .name(nearest.getName())
                    .distanceFromPreviousKm(Math.round(distanceFromPrevious * 10.0) / 10.0)
                    .order(order++)
                    .build());

            currentLat = nearest.getLatitude();
            currentLng = nearest.getLongitude();
            remaining.remove(nearest);
        }

        int estimatedMinutes = (int) Math.round(totalDistance * 4);

        return RouteResponse.builder()
                .stops(stops)
                .totalDistanceKm(Math.round(totalDistance * 10.0) / 10.0)
                .estimatedTime(estimatedMinutes + " mins")
                .build();
    }

    private double haversine(double lat1, double lon1, double lat2, double lon2) {
        if (lat1 == 0 && lon1 == 0) return 0;
        final int earthRadiusKm = 6371;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
}
