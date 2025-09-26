package com.softwave.clubstep.base;

import org.springframework.data.annotation.Id;


public class BaseUser {
    
    private String gender;
    
    private String firstname;

    private String lastname;

    private String birthday;

    private String email;

    private String street;

    private String housenumber;

    private String district;

    private String phonenumber;

    //refs
    private String userAuthId;



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
    String district,
    String phonenumber
    )
    {
    this.gender = gender;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.email = email;
    this.street = street;
    this.housenumber = housenumber;
    this.district = district;
    this.phonenumber = phonenumber;
    };

    
                  {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}   

    public String getGender() { return gender; }
    public void setGender( String gender ) { this.gender = gender; }

    public String getFirstname() { return firstname; }
    public void setFirstname( String firstname ) { this.firstname = firstname; }

    public String getLastname() {return lastname;}
    public void setLastname( String lastname ) { this.lastname = lastname; }

    public String getBirthday() {return birthday;}
    public void setBirthday( String birthday ) { this.birthday = birthday;}

    public String getEmail() {return email;}
    public void setEmail( String email ) { this.email = email; }

    public String getStreet() {return street;}
    public void setStreet(String street) {this.street = street; }

    public String getHousenumber() {return housenumber;}
    public void setHousenumber(String housenumber) { this.housenumber = housenumber;}

    public String getDistrict() { return district;}
    public void setDistrict(String district) {this.district = district;}

    public String getPhonenumber() {return phonenumber;}
    public void setPhonenumber( String phonenumber ) { this.phonenumber = phonenumber; }

    public String getUserAuthId() { return userAuthId; }
    public void setUserAuthId(String userAuthId) { this.userAuthId = userAuthId; }    
    
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
              {/*getter / setter */}
}


