package com.softwave.clubstep.DTO;

import com.softwave.clubstep.enums.Roles;


public class RegistrationGuestDTO {


    // UserAuth    
    private String username;

    private String password;

    private String email;

    private Roles role;

    // Guest / Host
    private String gender;
    
    private String firstname;

    private String lastname;

    private String birthday;

    private String street;

    private String housenumber;

    private String phonenumber;


    public RegistrationGuestDTO() {};
    public RegistrationGuestDTO(
    // userId will be generated automatically
    String username,
    String password,
    String email,
    Roles role,
    String gender,
    String firstname,
    String lastname,
    String birthday,
    String street,
    String housenumber,
    String phonenumber
    )
    {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.street = street;
    this.housenumber = housenumber;
    this.phonenumber = phonenumber;
    };




                  {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    
    // UserAuth
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    // Guest / Host
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

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

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHousenumber() {
        return housenumber;
    }

    public void setHousenumber(String housenumber) {
        this.housenumber = housenumber;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
              {/*getter / setter */}
}


