package com.vaishali.heritage.config;

import com.vaishali.heritage.model.Hotel;
import com.vaishali.heritage.model.Place;
import com.vaishali.heritage.repository.HotelRepository;
import com.vaishali.heritage.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final PlaceRepository placeRepository;
    private final HotelRepository hotelRepository;

    @Override
    public void run(String... args) {
        if (placeRepository.count() == 0) {
            seedPlaces();
        }
        if (hotelRepository.count() == 0) {
            seedHotels();
        }
    }

    private void seedPlaces() {
        Instant now = Instant.now();

        List<Place> places = List.of(
                Place.builder()
                        .name("Ashokan Pillar")
                        .category("Historical")
                        .type("Ancient Monument")
                        .image("https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=800&q=80")
                        .rating(4.7)
                        .reviewsCount(230)
                        .distance("1 hr  5 km")
                        .builtIn("3rd Century BCE")
                        .height("12.2 m")
                        .material("Sandstone")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("The Ashokan Pillar in Vaishali is a monolithic structure built by Emperor Ashoka in 3rd century BCE. It is a symbol of peace and harmony.")
                        .history("This pillar was built to commemorate the visit of Lord Buddha to Vaishali. The inscription on the pillar is in Prakrit language and Brahmi script.")
                        .latitude(25.9897)
                        .longitude(85.1280)
                        .createdAt(now)
                        .updatedAt(now)
                        .build(),
                Place.builder()
                        .name("Buddha Stupa")
                        .category("Buddhist")
                        .type("Buddhist Site")
                        .image("https://images.unsplash.com/photo-1623068387585-95dfbedd54a8?w=800&q=80")
                        .rating(4.8)
                        .reviewsCount(198)
                        .distance("1.5 hr  3 km")
                        .builtIn("5th Century BCE")
                        .height("8 m")
                        .material("Brick")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("Sacred stupa and spiritual site believed to hold relics associated with Lord Buddha.")
                        .history("Constructed to mark the place where Buddha delivered his last sermon before his journey to Kushinagar.")
                        .latitude(25.9920)
                        .longitude(85.1300)
                        .createdAt(now)
                        .updatedAt(now)
                        .build(),
                Place.builder()
                        .name("Abhishek Pushkarini")
                        .category("Religious")
                        .type("Sacred Tank")
                        .image("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80")
                        .rating(4.6)
                        .reviewsCount(156)
                        .distance("1 hr  4 km")
                        .builtIn("Ancient")
                        .height("-")
                        .material("Stone")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("Sacred tank associated with Lord Buddha used for ceremonial purification.")
                        .history("According to legend, this tank was used by the Lichhavi rulers for royal coronation ceremonies.")
                        .latitude(25.9880)
                        .longitude(85.1265)
                        .createdAt(now)
                        .updatedAt(now)
                        .build(),
                Place.builder()
                        .name("Vaishali Museum")
                        .category("Museums")
                        .type("Historical Museum")
                        .image("https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&q=80")
                        .rating(4.5)
                        .reviewsCount(142)
                        .distance("1 hr  2 km")
                        .builtIn("1971")
                        .height("-")
                        .material("Concrete")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("Explore the rich history of Vaishali through preserved artifacts and ancient relics.")
                        .history("Houses terracotta figurines, coins, and seals excavated from the ancient site of Vaishali.")
                        .latitude(25.9910)
                        .longitude(85.1240)
                        .createdAt(now)
                        .updatedAt(now)
                        .build(),
                Place.builder()
                        .name("Kutagarasala")
                        .category("Buddhist")
                        .type("Buddhist Site")
                        .image("https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80")
                        .rating(4.6)
                        .reviewsCount(110)
                        .distance("2 hr  6 km")
                        .builtIn("5th Century BCE")
                        .height("-")
                        .material("Brick")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("Site of the monastery where Buddha spent many monsoons during his ministry.")
                        .history("Considered one of the most significant sites in early Buddhist history.")
                        .latitude(25.9950)
                        .longitude(85.1330)
                        .createdAt(now)
                        .updatedAt(now)
                        .build(),
                Place.builder()
                        .name("Raja Vishal ka Garh")
                        .category("Historical")
                        .type("Historical Site")
                        .image("https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80")
                        .rating(4.4)
                        .reviewsCount(98)
                        .distance("2.5 hr  7 km")
                        .builtIn("Ancient")
                        .height("-")
                        .material("Earth Mound")
                        .bestTime("Oct - Mar")
                        .weather("20°C - 30°C")
                        .description("Remains of the ancient parliamentary hall of the Vajji confederacy.")
                        .history("Believed to be the site of the world's earliest known republic assembly.")
                        .latitude(25.9860)
                        .longitude(85.1200)
                        .createdAt(now)
                        .updatedAt(now)
                        .build()
        );

        placeRepository.saveAll(places);
    }

    private void seedHotels() {
        List<Hotel> hotels = List.of(
                Hotel.builder()
                        .name("Hotel Vaishali Inn")
                        .type("Hotels")
                        .rating(4.3)
                        .distance("1.2 km")
                        .price(1500)
                        .image("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80")
                        .address("Near Vaishali Railway Station")
                        .build(),
                Hotel.builder()
                        .name("The Heritage Resort")
                        .type("Hotels")
                        .rating(4.6)
                        .distance("2.5 km")
                        .price(2500)
                        .image("https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80")
                        .address("Vaishali Main Road")
                        .build(),
                Hotel.builder()
                        .name("Buddha Residency")
                        .type("Hotels")
                        .rating(4.2)
                        .distance("3.1 km")
                        .price(1200)
                        .image("https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80")
                        .address("Near Buddha Stupa")
                        .build()
        );

        hotelRepository.saveAll(hotels);
    }
}
