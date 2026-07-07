package com.vaishali.heritage.service;

import com.vaishali.heritage.exception.ResourceNotFoundException;
import com.vaishali.heritage.model.Hotel;
import com.vaishali.heritage.repository.HotelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelService {

    private final HotelRepository hotelRepository;

    public List<Hotel> getAllHotels(String type) {
        if (type != null && !type.isBlank() && !type.equalsIgnoreCase("all")) {
            return hotelRepository.findByTypeIgnoreCase(type);
        }
        return hotelRepository.findAll();
    }

    public Hotel getHotelById(String id) {
        return hotelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Hotel not found with id: " + id));
    }

    public Hotel createHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public Hotel updateHotel(String id, Hotel updated) {
        Hotel existing = getHotelById(id);
        existing.setName(updated.getName());
        existing.setType(updated.getType());
        existing.setRating(updated.getRating());
        existing.setDistance(updated.getDistance());
        existing.setPrice(updated.getPrice());
        existing.setImage(updated.getImage());
        existing.setAddress(updated.getAddress());
        return hotelRepository.save(existing);
    }

    public void deleteHotel(String id) {
        Hotel existing = getHotelById(id);
        hotelRepository.delete(existing);
    }
}
