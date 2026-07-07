package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.request.PlaceRequest;
import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.model.Place;
import com.vaishali.heritage.service.PlaceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Place>>> getAllPlaces(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search
    ) {
        List<Place> places = placeService.getAllPlaces(category, search);
        return ResponseEntity.ok(ApiResponse.success(places));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Place>> getPlaceById(@PathVariable String id) {
        Place place = placeService.getPlaceById(id);
        return ResponseEntity.ok(ApiResponse.success(place));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Place>> createPlace(@Valid @RequestBody PlaceRequest request) {
        Place place = placeService.createPlace(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success("Place created", place));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Place>> updatePlace(
            @PathVariable String id,
            @Valid @RequestBody PlaceRequest request
    ) {
        Place place = placeService.updatePlace(id, request);
        return ResponseEntity.ok(ApiResponse.success("Place updated", place));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Object>> deletePlace(@PathVariable String id) {
        placeService.deletePlace(id);
        return ResponseEntity.ok(ApiResponse.success("Place deleted", null));
    }
}
