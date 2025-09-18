package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.entity.Priority;
import com.luv2code.springboot.thymeleafdemo.entity.Status;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PriorityService {
    List<Priority> getAllPriorities();
}
