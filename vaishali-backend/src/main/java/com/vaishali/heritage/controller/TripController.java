package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.request.TripGenerateRequest;
import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.model.Trip;
import com.vaishali.heritage.service.TripService;
import com.vaishali.heritage.util.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;

    @PostMapping("/generate")
    public ApiResponse<Trip> generate(@Valid @RequestBody TripGenerateRequest request) {
        String userId = SecurityUtils.getCurrentUserId();
        Trip trip = tripService.generateItinerary(userId == null ? "guest" : userId, request);
        return ApiResponse.success("Itinerary generated", trip);
    }

    @GetMapping("/{id}")
    public ApiResponse<Trip> getTrip(@PathVariable String id) {
        return ApiResponse.success(tripService.getTripById(id));
    }

    @GetMapping("/my")
    public ApiResponse<List<Trip>> getMyTrips() {
        String userId = SecurityUtils.getCurrentUserId();
        return ApiResponse.success(tripService.getUserTrips(userId));
    }
}
