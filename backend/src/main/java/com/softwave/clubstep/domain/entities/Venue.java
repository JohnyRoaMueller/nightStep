package com.softwave.clubstep.domain.entities;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "venues")
public class Venue {

    @Id
    private String id;

    private String name;
    private String type;
    private int capacity;
    private String city;
    private String district;
    private String street;
    private String houseNumber;
    private int postalCode;
    private String description;

    private List<String> imagePaths;

    private String hostId;

    private List<String> followerIds;

    private List<String> eventIds;

    
    public Venue() {}

    public Venue(
        String name,
        String type,
        int capacity,
        String city,
        String district,
        String street,
        String houseNumber,
        int postalCode,
        String description,
        List<String> imagePaths,
        String hostId,
        List<String> followerIds,
        List<String> eventIds
    ) {
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.city = city;
        this.district = district;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postalCode = postalCode;
        this.description = description;
        this.imagePaths = imagePaths;
        this.hostId = hostId;
        this.followerIds = followerIds;
        this.eventIds = eventIds;
    }

    {/*getter / setter*/}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

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

    public int getPostalCode() { return postalCode; }
    public void setPostalCode(int postalCode) { this.postalCode = postalCode; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getPicAddresses() { return imagePaths; }
    public void setPicAddresses(List<String> imagePaths) { this.imagePaths = imagePaths; }

    public String getHostId() { return hostId; }
    public void setHostId(String hostId) { this.hostId = hostId; }

    public List<String> getFollowerIds() { return followerIds; }
    public void setFollowerIds(List<String> followerIds) { this.followerIds = followerIds; }

    public List<String> getEventIds() { return eventIds; }
    public void setEventIds(List<String> eventIds) { this.eventIds = eventIds; }
}
