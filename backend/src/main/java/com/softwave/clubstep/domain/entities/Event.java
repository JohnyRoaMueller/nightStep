package com.softwave.clubstep.domain.entities;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "events")
public class Event {
    
    @Id
    private String id;

    private String name;

    private OffsetDateTime startTimeDate;
    private OffsetDateTime endTimeDate;

    private BigDecimal price;

    private int likes;

    private String description;

    private String soldTickets;

    private List<String> imagePaths;

    // Refs
    @Field("venueId")
    private String venueId;
    

    public Event() {}

    public Event(
        String name,
        OffsetDateTime startTimeDate,
        OffsetDateTime endTimeDate,
        BigDecimal price,
        int likes,
        String description,
        String soldTickets,
        List<String> imagePaths,
        String venueId
    ) {
        this.name = name;
        this.startTimeDate = startTimeDate;
        this.endTimeDate = endTimeDate;
        this.price = price;
        this.likes = likes;
        this.description = description;
        this.soldTickets = soldTickets;
        this.imagePaths = imagePaths;
        this.venueId = venueId;
    }

    // Getter und Setter

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public OffsetDateTime getStartTimeDate() { return startTimeDate; }
    public void setStartTimeDate(OffsetDateTime startTimeDate) { this.startTimeDate = startTimeDate; }

    public OffsetDateTime getEndTimeDate() { return endTimeDate; }
    public void setEndTimeDate(OffsetDateTime endTimeDate) { this.endTimeDate = endTimeDate; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public int getLikes() { return likes; }
    public void setLikes(int likes) { this.likes = likes; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getSoldTickets() { return soldTickets; }
    public void setSoldTickets(String soldTickets) { this.soldTickets = soldTickets; }

    public List<String> getImagePaths() { return imagePaths; }
    public void setImagePaths(List<String> imagePaths) { this.imagePaths = imagePaths; }

    public String getVenueId() { return venueId; }
    public void setVenueId(String venueId) { this.venueId = venueId; }
}
