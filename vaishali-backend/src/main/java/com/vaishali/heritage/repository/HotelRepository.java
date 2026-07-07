package com.vaishali.heritage.repository;

import com.vaishali.heritage.model.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HotelRepository extends MongoRepository<Hotel, String> {

    List<Hotel> findByTypeIgnoreCase(String type);
}
