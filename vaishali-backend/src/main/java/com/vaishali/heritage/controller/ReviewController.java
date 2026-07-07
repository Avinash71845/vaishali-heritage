package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.request.ReviewRequest;
import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.exception.InvalidCredentialsException;
import com.vaishali.heritage.model.Review;
import com.vaishali.heritage.service.ReviewService;
import com.vaishali.heritage.util.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<ApiResponse<Review>> createReview(@Valid @RequestBody ReviewRequest request) {
        String userId = SecurityUtils.getCurrentUserId();
        if (userId == null) {
            throw new InvalidCredentialsException("You must be logged in to submit a review");
        }
        Review review = reviewService.createReview(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success("Review submitted", review));
    }

    @GetMapping("/place/{placeId}")
    public ResponseEntity<ApiResponse<List<Review>>> getReviewsByPlace(@PathVariable String placeId) {
        return ResponseEntity.ok(ApiResponse.success(reviewService.getReviewsByPlace(placeId)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Review>>> getAllReviews() {
        return ResponseEntity.ok(ApiResponse.success(reviewService.getAllReviews()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Object>> deleteReview(@PathVariable String id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok(ApiResponse.success("Review deleted", null));
    }
}
