package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.PlaceRequest;
import com.vaishali.heritage.exception.ResourceNotFoundException;
import com.vaishali.heritage.model.Place;
import com.vaishali.heritage.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<Place> getAllPlaces(String category, String search) {
        if (search != null && !search.isBlank()) {
            return placeRepository.findByNameContainingIgnoreCase(search);
        }
        if (category != null && !category.isBlank() && !category.equalsIgnoreCase("all")) {
            return placeRepository.findByCategoryIgnoreCase(category);
        }
        return placeRepository.findAll();
    }

    public Place getPlaceById(String id) {
        return placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id: " + id));
    }

    public Place createPlace(PlaceRequest request) {
        Place place = Place.builder()
                .name(request.getName())
                .category(request.getCategory())
                .type(request.getType())
                .image(request.getImage())
                .rating(0)
                .reviewsCount(0)
                .distance(request.getDistance())
                .builtIn(request.getBuiltIn())
                .height(request.getHeight())
                .material(request.getMaterial())
                .bestTime(request.getBestTime())
                .weather(request.getWeather())
                .description(request.getDescription())
                .history(request.getHistory())
                .latitude(request.getLatitude())
                .longitude(request.getLongitude())
                .createdAt(Instant.now())
                .updatedAt(Instant.now())
                .build();

        return placeRepository.save(place);
    }

    public Place updatePlace(String id, PlaceRequest request) {
        Place existing = getPlaceById(id);

        existing.setName(request.getName());
        existing.setCategory(request.getCategory());
        existing.setType(request.getType());
        existing.setImage(request.getImage());
        existing.setDistance(request.getDistance());
        existing.setBuiltIn(request.getBuiltIn());
        existing.setHeight(request.getHeight());
        existing.setMaterial(request.getMaterial());
        existing.setBestTime(request.getBestTime());
        existing.setWeather(request.getWeather());
        existing.setDescription(request.getDescription());
        existing.setHistory(request.getHistory());
        existing.setLatitude(request.getLatitude());
        existing.setLongitude(request.getLongitude());
        existing.setUpdatedAt(Instant.now());

        return placeRepository.save(existing);
    }

    public void deletePlace(String id) {
        Place existing = getPlaceById(id);
        placeRepository.delete(existing);
    }

    public void recalculateRating(String placeId, double newAverage, int reviewsCount) {
        Place place = getPlaceById(placeId);
        place.setRating(Math.round(newAverage * 10.0) / 10.0);
        place.setReviewsCount(reviewsCount);
        placeRepository.save(place);
    }
}
