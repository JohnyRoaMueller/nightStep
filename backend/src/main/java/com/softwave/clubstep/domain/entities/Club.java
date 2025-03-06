package com.softwave.clubstep.domain.entities;

import java.util.List;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String type;
    private int capacity;
    private String city;
    private String district;
    private String street;
    private String houseNumber;
    private String postalCode;
    private String description;

    @ElementCollection
    @CollectionTable(name = "club_pic_addresses", joinColumns = @JoinColumn(name = "club_id"))
    @Column(name = "pic_address", columnDefinition = "TEXT")
    private List<String> picAddresses;

    /** Beziehungen */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private Host host;

    @ManyToMany
    @JoinTable(
        name = "club_follower",
        joinColumns = @JoinColumn(name = "club_id"),
        inverseJoinColumns = @JoinColumn(name = "follower_id")
    )
    private List<Guest> followers;

    /** Konstruktoren */
    public Club() {}

    public Club
        (
        String name,
        String type,
        int capacity,
        String city,
        String district, 
        String street,
        String houseNumber,
        String postalCode, 
        String description,
        List<String> picAddresses
        )
        {
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.city = city;
        this.district = district;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.description = description;
        this.picAddresses = picAddresses;
        }

    /** Getter & Setter */
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }

    public String getHouseNumber() { return houseNumber; }
    public void setHouseNumber(String houseNumber) { this.houseNumber = houseNumber; }

    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getPicAddresses() { return picAddresses; }
    public void setPicAddresses(List<String> picAddresses) { this.picAddresses = picAddresses; }

    public Host getHost() { return host; }
    public void setHost(Host host) { this.host = host; }

    public List<Guest> getFollowers() { return followers; }
    public void setFollowers(List<Guest> followers) { this.followers = followers; }
    /** getter & Setter */
}