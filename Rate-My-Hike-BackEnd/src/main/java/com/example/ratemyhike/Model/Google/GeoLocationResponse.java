package com.example.ratemyhike.Model.Google;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GeoLocationResponse {
    public Location location;
    public double accuracy;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Location {
        public double lat;
        public double lng;
    }

}
