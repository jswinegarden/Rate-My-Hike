package com.example.ratemyhike.Model.Google;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NearByTrailsResponse {
    public ArrayList<Object> html_attributions;
    public String next_page_token;
    public ArrayList<Result> results;
    public String status;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Geometry {
        public Location location;
        public Viewport viewport;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Location {
        public double lat;
        public double lng;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Northeast {
        public double lat;
        public double lng;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class OpeningHours {
        public boolean open_now;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Photo {
        public int height;
        public ArrayList<String> html_attributions;
        public String photo_reference;
        public int width;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class PlusCode {
        public String compound_code;
        public String global_code;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Result {
        public String business_status;
        public Geometry geometry;
        public String icon;
        public String icon_background_color;
        public String icon_mask_base_uri;
        public String name;
        public OpeningHours opening_hours;
        public ArrayList<Photo> photos;
        public String place_id;
        public PlusCode plus_code;
        public double rating;
        public String reference;
        public String scope;
        public ArrayList<String> types;
        public int user_ratings_total;
        public String vicinity;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Southwest {
        public double lat;
        public double lng;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Viewport {
        public Northeast northeast;
        public Southwest southwest;
    }

}
