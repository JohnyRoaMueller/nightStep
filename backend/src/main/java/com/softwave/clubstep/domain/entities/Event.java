package com.softwave.clubstep.domain.entities;

import java.math.BigDecimal;

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
    private BigDecimal price;
    private String description;

    @ManyToOne
    @JoinColumn(name = "venue_id", nullable = false)
    @JsonBackReference("eventsReference")
    Venue venue;


    public Event() {};

    public Event
    (
        String name,
        BigDecimal price,
        String description,
        Venue venue
    )
    {
        this.name = name;
        this.price = price;
        this.description = description;
        this.venue = venue;
    } 

    public String getName() { return name; } 

    public void setName(String name) { this.name = name; }

    public BigDecimal getPrice() { return price; }

    public void setPrice(BigDecimal price) { this.price = price; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public Venue getVenue() { return venue; }

    public void setVenue(Venue venue) { this.venue = venue; }

}
