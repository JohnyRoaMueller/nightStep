package com.softwave.clubstep.DTO;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.domain.entities.Venue;
import com.softwave.clubstep.enums.Roles;

public class RegistrationHostDTO {
    private String firstname;
    private String lastname;
    private String email;
    private String emailConfirm;
    private String gender;
    private String birthday;
    private String username;
    private String password;
    private List<MultipartFile> images;
    private Roles role;  
    private Venue venue;

    public RegistrationHostDTO() {}
    public RegistrationHostDTO(
        String firstname,
        String lastname,
        String email,
        String emailConfirm,
        String gender,
        String birthday,
        String username,
        String password,
        List<MultipartFile> images,
        Roles role,
        Venue venue
    )
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.emailConfirm = emailConfirm;
        this.gender = gender;
        this.birthday = birthday;
        this.username = username;
        this.password = password;
        this.images = images;
        this.role = role;
        this.venue = venue;
    }


    // Getter und Setter
    public String getFirstname() {return firstname;}
    public void setFirstname(String firstname) {this.firstname = firstname;}

    public String getLastname() {return lastname;}
    public void setLastname(String lastname) {this.lastname = lastname;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

    public String getEmailConfirm() {return emailConfirm;}
    public void setEmailConfirm(String emailConfirm) {this.emailConfirm = emailConfirm;}

    public String getGender() {return gender;}
    public void setGender(String gender) {this.gender = gender;}

    public String getBirthday() {return birthday;}
    public void setBirthday(String birthday) {this.birthday = birthday;}

    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public List<MultipartFile> getImages() {return images;}
    public void setImages (List<MultipartFile> images) {this.images = images;}

    public Roles getRole() { return role;}
    public void setRole(Roles role) {this.role = role;}

    public Venue getVenue() {return venue;}
    public void setVenue(Venue venue) {this.venue = venue;}
}