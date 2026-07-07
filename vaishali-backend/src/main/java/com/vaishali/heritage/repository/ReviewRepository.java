package com.vaishali.heritage.repository;

import com.vaishali.heritage.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {

    List<Review> findByPlaceIdOrderByCreatedAtDesc(String placeId);

    List<Review> findByUserId(String userId);

    long countByPlaceId(String placeId);
}
