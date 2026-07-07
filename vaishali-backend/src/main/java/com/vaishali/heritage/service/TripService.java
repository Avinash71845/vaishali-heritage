package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.TripGenerateRequest;
import com.vaishali.heritage.exception.ResourceNotFoundException;
import com.vaishali.heritage.model.Place;
import com.vaishali.heritage.model.Trip;
import com.vaishali.heritage.repository.PlaceRepository;
import com.vaishali.heritage.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TripService {

    private final PlaceRepository placeRepository;
    private final TripRepository tripRepository;

    private static final List<String> START_TIMES = List.of("09:00 AM", "11:30 AM", "02:00 PM", "04:00 PM", "06:00 PM");

    public Trip generateItinerary(String userId, TripGenerateRequest request) {
        List<Place> candidates = filterPlacesByInterests(request.getInterests());

        if (candidates.isEmpty()) {
            candidates = placeRepository.findAll();
        }

        int placesPerDay = Math.max(1, Math.min(4, candidates.size() / Math.max(1, request.getDays()) + 1));

        List<Trip.DayPlan> dayPlans = new ArrayList<>();
        int placeIndex = 0;
        double totalDistance = 0;

        for (int day = 1; day <= request.getDays(); day++) {
            List<Trip.ItineraryStop> stops = new ArrayList<>();

            for (int slot = 0; slot < placesPerDay && placeIndex < candidates.size(); slot++) {
                Place place = candidates.get(placeIndex++);
                double distanceKm = 2 + (slot * 1.5);
                totalDistance += distanceKm;

                stops.add(Trip.ItineraryStop.builder()
                        .time(START_TIMES.get(slot % START_TIMES.size()))
                        .placeId(place.getId())
                        .placeName(place.getName())
                        .placeImage(place.getImage())
                        .distanceFromPrevious(String.format("%.1f km", distanceKm))
                        .build());
            }

            if (!stops.isEmpty()) {
                dayPlans.add(Trip.DayPlan.builder().dayNumber(day).stops(stops).build());
            }
        }

        int totalStops = dayPlans.stream().mapToInt(d -> d.getStops().size()).sum();
        String estimatedTime = (totalStops * 1) + "-" + (totalStops * 2) + " hrs";

        Trip trip = Trip.builder()
                .userId(userId)
                .days(request.getDays())
                .budget(request.getBudget())
                .interests(request.getInterests())
                .startingPoint(request.getStartingPoint())
                .itinerary(dayPlans)
                .totalDistanceKm(Math.round(totalDistance * 10.0) / 10.0)
                .estimatedTime(estimatedTime)
                .createdAt(Instant.now())
                .build();

        return tripRepository.save(trip);
    }

    private List<Place> filterPlacesByInterests(List<String> interests) {
        List<Place> all = placeRepository.findAll();
        List<Place> matched = new ArrayList<>();

        for (Place place : all) {
            for (String interest : interests) {
                if (place.getCategory() != null && place.getCategory().equalsIgnoreCase(interest)) {
                    matched.add(place);
                    break;
                }
            }
        }
        return matched;
    }

    public List<Trip> getUserTrips(String userId) {
        return tripRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public Trip getTripById(String id) {
        return tripRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trip not found with id: " + id));
    }
}
