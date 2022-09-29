package com.example.ratemyhike.Controller;

import com.example.ratemyhike.Model.Google.GeoLocationResponse;
import com.example.ratemyhike.Model.Google.NearByTrailsResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RestController
public class GoogleCallLocator {

    @Autowired
    private RestTemplate restTemplate;


    public GeoLocationResponse googleGiveMeTheLocation() throws JsonProcessingException {
        return restTemplate.postForObject("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC1prN1bEET8WlNMVP-_r05U9ABMG2mPSQ",
                null, GeoLocationResponse.class);
    }

    @GetMapping("/googleGiveMeTrails")
    public Object googleGiveMeTrails() throws JsonProcessingException {
        GeoLocationResponse userLocation = googleGiveMeTheLocation();
        UriComponents uriComponents = UriComponentsBuilder.newInstance()
                .scheme("https").host("maps.googleapis.com")
                .path("/maps/api/place/nearbysearch/json")
                .queryParam("keyword", "hiking")
                .queryParam("radius", "5000000")
                .queryParam("key", "AIzaSyC1prN1bEET8WlNMVP-_r05U9ABMG2mPSQ")
                .queryParam("location", userLocation.getLocation().getLat() + "," + userLocation.getLocation().getLng()).build();
        return restTemplate.getForObject(uriComponents.toUriString(), String.class);
    }

}

