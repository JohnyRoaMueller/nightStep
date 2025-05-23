package com.softwave.clubstep.domain.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Event  {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private LocalDateTime startTimeDate;
    private LocalDateTime endTimeDate;
    private BigDecimal price;
    private int likes;
    private String description;

    @ManyToOne
    @JoinColumn(name = "venue_id", nullable = false)
    @JsonBackReference("eventsReference")
    Venue venue;


    public Event() {};

    public Event
    (
        String name,
        LocalDateTime startTimeDate,
        LocalDateTime endTimeDate,
        BigDecimal price,
        int likes,
        String description,
        Venue venue
    )
    {
        this.name = name;
        this.startTimeDate = startTimeDate;
        this.endTimeDate = endTimeDate;
        this.price = price;
        this.likes = likes;
        this.description = description;
        this.venue = venue;
    } 

    public String getName() { return name; } 
    public void setName(String name) { this.name = name; }

    public LocalDateTime getStartTimeDate() { return startTimeDate; }
    public void setStartTimeDate(LocalDateTime startTimeDate) {this.startTimeDate = startTimeDate; }

    public LocalDateTime geteEndTimeDate() { return endTimeDate; }
    public void setEndTimeDate(LocalDateTime endTimeDate) {this.endTimeDate = endTimeDate; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public int getLikes() { return likes; }
    public void setLikes(int likes) { this.likes = likes; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Venue getVenue() { return venue; }
    public void setVenue(Venue venue) { this.venue = venue; }

}
