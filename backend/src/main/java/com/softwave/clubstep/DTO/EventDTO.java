package com.softwave.clubstep.DTO;

import java.math.BigDecimal;
import java.time.OffsetDateTime ;
import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.domain.entities.Venue;

public class EventDTO {

    private int id;
    private String name;
    private OffsetDateTime startTimeDate;
    private OffsetDateTime endTimeDate;
    private BigDecimal price;
    private int likes;
    private String description;
    private List<String> imagePaths;
    private Venue venue;
    private List<MultipartFile> images;


    public EventDTO() {};
    public EventDTO
    (
        String name,
        OffsetDateTime startTimeDate,
        OffsetDateTime endTimeDate,
        BigDecimal price,
        int likes,
        String description,
        Venue venue,
        List<MultipartFile> images
    )
    {
        this.name = name;
        this.startTimeDate = startTimeDate;
        this.endTimeDate = endTimeDate;
        this.price = price;
        this.likes = likes;
        this.description = description;
        this.venue = venue;
        this.images = images;
    } 

    public String getName() { return name; } 
    public void setName(String name) { this.name = name; }

    public OffsetDateTime  getStartTimeDate() { return startTimeDate; }
    public void setStartTimeDate(OffsetDateTime  startTimeDate) {this.startTimeDate = startTimeDate; }

    public OffsetDateTime  getEndTimeDate() { return endTimeDate; }
    public void setEndTimeDate(OffsetDateTime  endTimeDate) {this.endTimeDate = endTimeDate; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public int getLikes() { return likes; }
    public void setLikes(int likes) { this.likes = likes; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getImagePaths() { return imagePaths; }
    public void setImagePaths(List<String> imagePaths) { this.imagePaths = imagePaths; }

    public Venue getVenue() { return venue; }
    public void setVenue(Venue venue) { this.venue = venue; }

    public List<MultipartFile> getImages() { return images; }
    public void setImages(List<MultipartFile> images) { this.images = images; }    

}

