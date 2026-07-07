package com.vaishali.heritage.repository;

import com.vaishali.heritage.model.Trip;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TripRepository extends MongoRepository<Trip, String> {

    List<Trip> findByUserIdOrderByCreatedAtDesc(String userId);
}
