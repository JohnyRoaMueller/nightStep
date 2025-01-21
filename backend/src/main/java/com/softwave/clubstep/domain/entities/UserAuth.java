package com.softwave.clubstep.domain.entities;

import com.softwave.clubstep.enums.Roles;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserAuth {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    private Long Id;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private Roles role;



    public UserAuth() {};
    

    public UserAuth(
    // userId will be generated automatically
    String email,
    String password,
    Roles role
    )
    {
    this.email = email;
    this.password = password;
    this.role = role;
    };




                  {/*getter / setter */}
    {/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}                  
    public Long getUserId() {
        return Id;
    }

    public void setUserId(Long Id) {
        this.Id = Id;
    }

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
    {/* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
              {/*getter / setter */}
}
