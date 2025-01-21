package com.softwave.clubstep.base;

import com.softwave.clubstep.enums.Roles;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


public class RegisteringUser {


    // UserAuth    
    private String email;

    private String password;

    private Roles role;

    // Guest / Host
    private String salutation;
    
    private String firstname;

    private String lastname;

    private String street;

    private String housenumber;

    private String phonenumber;


    public RegisteringUser() {};
    
    public RegisteringUser(
    // userId will be generated automatically
    String email,
    String password,
    Roles role,
    String salutation,
    String firstname,
    String lastname,
    String street,
    String housenumber,
    String phonenumber
    )
    {
    this.email = email;
    this.password = password;
    this.role = role;
    this.firstname = firstname;
    this.lastname = lastname;
    this.street = street;
    this.housenumber = housenumber;
    this.phonenumber = phonenumber;
    };




                  {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    
    // UserAuth
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    // Guest / Host
    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
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


