package com.softwave.clubstep.DTO;

import java.util.List;

import javax.swing.plaf.multi.MultiPanelUI;

import org.springframework.web.multipart.MultipartFile;

public class VenueDTO {
    private String name;
    private String type;
    private int capacity;
    private String city;
    private String district;
    private String street;
    private String houseNumber;
    private int postalCode;
    private String description;
    private List<MultipartFile> imageBlobs;

    public VenueDTO() {}
    public VenueDTO
    (
        String name,
        String type,
        int capacity,
        String city,
        String district,
        String street,
        String houseNumber,
        int postalCode,
        String description,
        List<MultipartFile> imageBlobs 
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
        this.imageBlobs = imageBlobs;
    }

    // Getter und Setter
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}

    public String getType() {return type;}
    public void setType(String type) {this.type = type;}

    public int getCapacity() {return capacity;}
    public void setCapacity(int capacity) {this.capacity = capacity;}

    public String getCity() {return city;}
    public void setCity(String city) {this.city = city;}

    public String getDistrict() {return district;}
    public void setDistrict(String district) {this.district = district;}    

    public String getStreet() {return street;}
    public void setStreet(String street) {this.street = street;}

    public String getHouseNumber() {return houseNumber;}
    public void setHouseNumber(String houseNumber) {this.houseNumber = houseNumber;}

    public int getPostalCode() {return postalCode;}
    public void setPostalCode(int postalCode) {this.postalCode = postalCode;}

    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}

    public List<MultipartFile> getImageBlobs() {return imageBlobs;}
    public void setImageBlobs(List<MultipartFile> imageBlobs) {this.imageBlobs = imageBlobs;}
}