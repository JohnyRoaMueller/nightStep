package com.softwave.clubstep.DTO;

import org.springframework.web.multipart.MultipartFile;

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
    private MultipartFile imageOne;
    private MultipartFile imageTwo;
    private MultipartFile imageThree;
    private Roles role;  

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

    public MultipartFile getImageOne() {
        return imageOne;
    }

    public void setImageOne(MultipartFile imageOne) {
        this.imageOne = imageOne;
    }

    public MultipartFile getImageTwo() {
        return imageTwo;
    }

    public void setImageTwo(MultipartFile imageTwo) {
        this.imageTwo = imageTwo;
    }

    public MultipartFile getImageThree() {
        return imageThree;
    }

    public void setImageThree(MultipartFile imageThree) {
        this.imageThree = imageThree;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }
}