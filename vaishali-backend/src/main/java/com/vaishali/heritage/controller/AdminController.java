package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.dto.response.DashboardStatsResponse;
import com.vaishali.heritage.model.User;
import com.vaishali.heritage.repository.PlaceRepository;
import com.vaishali.heritage.repository.ReviewRepository;
import com.vaishali.heritage.repository.TripRepository;
import com.vaishali.heritage.repository.UserRepository;
import com.vaishali.heritage.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserService userService;
    private final PlaceRepository placeRepository;
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;
    private final TripRepository tripRepository;

    @GetMapping("/dashboard")
    public ApiResponse<DashboardStatsResponse> getDashboardStats() {
        DashboardStatsResponse stats = DashboardStatsResponse.builder()
                .totalPlaces(placeRepository.count())
                .totalUsers(userRepository.count())
                .totalReviews(reviewRepository.count())
                .totalItineraries(tripRepository.count())
                .build();
        return ApiResponse.success(stats);
    }

    @GetMapping("/users")
    public ApiResponse<List<User>> getAllUsers() {
        return ApiResponse.success(userService.getAllUsers());
    }

    @PatchMapping("/users/{id}/toggle-status")
    public ApiResponse<User> toggleUserStatus(@PathVariable String id) {
        return ApiResponse.success("User status updated", userService.toggleUserStatus(id));
    }

    @DeleteMapping("/users/{id}")
    public ApiResponse<Object> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ApiResponse.success("User deleted", null);
    }
}
