package com.vaishali.heritage.repository;

import com.vaishali.heritage.model.Place;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PlaceRepository extends MongoRepository<Place, String> {

    List<Place> findByCategoryIgnoreCase(String category);

    List<Place> findByNameContainingIgnoreCase(String name);
}
