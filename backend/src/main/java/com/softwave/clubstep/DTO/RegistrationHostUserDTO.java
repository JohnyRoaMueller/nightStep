package com.softwave.clubstep.DTO;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.enums.Roles;

public class RegistrationHostUserDTO {
    private String firstname;
    private String lastname;
    private String email;
    private String emailConfirm;
    private String gender;
    private String birthday;
    private String username;
    private String password;
    private String nameOfVenue;
    private String typeOfVenue;
    private String capacity;
    private String cityOfVenue;
    private String streetOfVenue;
    private String housenumberOfVenue;
    private String postcodeOfVenue;
    private List<MultipartFile> images;
    private Roles role;  
    private Venue venue;

    // Getter und Setter

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailConfirm() {
        return emailConfirm;
    }

    public void setEmailConfirm(String emailConfirm) {
        this.emailConfirm = emailConfirm;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNameOfVenue() {
        return nameOfVenue;
    }

    public void setNameOfVenue(String nameOfVenue) {
        this.nameOfVenue = nameOfVenue;
    }

    public String getTypeOfVenue() {
        return typeOfVenue;
    }

    public void setTypeOfVenue(String typeOfVenue) {
        this.typeOfVenue = typeOfVenue;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getCityOfVenue() {
        return cityOfVenue;
    }

    public void setCityOfVenue(String cityOfVenue) {
        this.cityOfVenue = cityOfVenue;
    }

    public String getStreetOfVenue() {
        return streetOfVenue;
    }

    public void setStreetOfVenue(String streetOfVenue) {
        this.streetOfVenue = streetOfVenue;
    }

    public String getHousenumberOfVenue() {
        return housenumberOfVenue;
    }

    public void setHousenumberOfVenue(String housenumberOfVenue) {
        this.housenumberOfVenue = housenumberOfVenue;
    }

    public String getPostcodeOfVenue() {
        return postcodeOfVenue;
    }

    public void setPostcodeOfVenue(String postcodeOfVenue) {
        this.postcodeOfVenue = postcodeOfVenue;
    }

    public List<MultipartFile> getImages() {
        return images;
    }

    public void setImages (List<MultipartFile> images) {
        this.images = images;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}