package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.ReviewRequest;
import com.vaishali.heritage.exception.ResourceNotFoundException;
import com.vaishali.heritage.model.Review;
import com.vaishali.heritage.model.User;
import com.vaishali.heritage.repository.ReviewRepository;
import com.vaishali.heritage.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceService placeService;

    public Review createReview(String userId, ReviewRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        placeService.getPlaceById(request.getPlaceId());

        Review review = Review.builder()
                .placeId(request.getPlaceId())
                .userId(userId)
                .userName(user.getName())
                .rating(request.getRating())
                .comment(request.getComment())
                .photos(request.getPhotos() == null ? List.of() : request.getPhotos())
                .createdAt(Instant.now())
                .build();

        Review saved = reviewRepository.save(review);
        recalculatePlaceRating(request.getPlaceId());
        return saved;
    }

    public List<Review> getReviewsByPlace(String placeId) {
        return reviewRepository.findByPlaceIdOrderByCreatedAtDesc(placeId);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public void deleteReview(String id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
        String placeId = review.getPlaceId();
        reviewRepository.delete(review);
        recalculatePlaceRating(placeId);
    }

    private void recalculatePlaceRating(String placeId) {
        List<Review> reviews = reviewRepository.findByPlaceIdOrderByCreatedAtDesc(placeId);
        if (reviews.isEmpty()) {
            placeService.recalculateRating(placeId, 0, 0);
            return;
        }
        double average = reviews.stream().mapToInt(Review::getRating).average().orElse(0);
        placeService.recalculateRating(placeId, average, reviews.size());
    }
}
