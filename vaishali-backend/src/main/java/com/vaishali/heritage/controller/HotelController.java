package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.model.Hotel;
import com.vaishali.heritage.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@RequiredArgsConstructor
public class HotelController {

    private final HotelService hotelService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Hotel>>> getAllHotels(@RequestParam(required = false) String type) {
        return ResponseEntity.ok(ApiResponse.success(hotelService.getAllHotels(type)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Hotel>> getHotelById(@PathVariable String id) {
        return ResponseEntity.ok(ApiResponse.success(hotelService.getHotelById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Hotel>> createHotel(@RequestBody Hotel hotel) {
        Hotel created = hotelService.createHotel(hotel);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success("Hotel created", created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Hotel>> updateHotel(@PathVariable String id, @RequestBody Hotel hotel) {
        return ResponseEntity.ok(ApiResponse.success("Hotel updated", hotelService.updateHotel(id, hotel)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Object>> deleteHotel(@PathVariable String id) {
        hotelService.deleteHotel(id);
        return ResponseEntity.ok(ApiResponse.success("Hotel deleted", null));
    }
}
