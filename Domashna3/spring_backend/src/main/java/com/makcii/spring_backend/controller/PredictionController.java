package com.makcii.spring_backend.controller;

import com.makcii.spring_backend.model.dto.PredictionDataDto;
import com.makcii.spring_backend.services.DayDataService;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/predictions")
public class PredictionController {

    private final DayDataService dayDataService;

    private final RestTemplate restTemplate;

    public PredictionController(DayDataService dayDataService, RestTemplateBuilder builder) {
        this.dayDataService = dayDataService;
        this.restTemplate = builder.build();
    }

    @GetMapping("/{issuerName}")
    public ResponseEntity<String> getPrediction(@PathVariable String issuerName) {
        try {
            List<PredictionDataDto> recentData = dayDataService.getPredictionData(issuerName, 5);

            String fastApiUrl = "http://localhost:8000/predict";

            String response = restTemplate.postForObject(fastApiUrl, recentData, String.class);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}

