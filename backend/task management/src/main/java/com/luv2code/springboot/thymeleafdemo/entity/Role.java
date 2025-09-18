package com.luv2code.springboot.thymeleafdemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Role {
    @Id
    @GeneratedValue
    private Long id;
    private String name; // e.g., ROLE_ADMIN, ROLE_USER
}

