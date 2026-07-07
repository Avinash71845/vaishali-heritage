package com.vaishali.heritage.controller;

import com.vaishali.heritage.dto.request.RouteOptimizeRequest;
import com.vaishali.heritage.dto.response.ApiResponse;
import com.vaishali.heritage.dto.response.RouteResponse;
import com.vaishali.heritage.service.RouteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/routes")
@RequiredArgsConstructor
public class RouteController {

    private final RouteService routeService;

    @PostMapping("/optimize")
    public ApiResponse<RouteResponse> optimize(@Valid @RequestBody RouteOptimizeRequest request) {
        return ApiResponse.success(routeService.optimizeRoute(request));
    }
}
