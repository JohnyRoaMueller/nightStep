package com.softwave.clubstep.base;

import com.softwave.clubstep.domain.entities.UserAuth;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.OneToOne;

import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@MappedSuperclass
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class BaseUser {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String gender;
    
    private String firstname;

    private String lastname;

    private String birthday;

    private String email;

    private String street;

    private String housenumber;

    private String phonenumber;

    @OneToOne(mappedBy = "baseUser")
    private UserAuth userAuth;


    public BaseUser() {};
    
    public BaseUser(
    // userId will be generated automatically
    String gender,
    String firstname,
    String lastname,
    String birthday,
    String email,
    String street,
    String housenumber,
    String phonenumber,
    UserAuth userAuth
    )
    {
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.email = email;
    this.street = street;
    this.housenumber = housenumber;
    this.phonenumber = phonenumber;
    this.userAuth = userAuth;
    };

    
                  {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   
    

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public UserAuth getUserAuth(){
        return userAuth;
    }

    public void setUserAuth(UserAuth userAuth) {
        this.userAuth = userAuth;
    }
 
    
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
              {/*getter / setter */}
}


