package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.dao.PriorityRepository;
import com.luv2code.springboot.thymeleafdemo.dao.StatusRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Priority;
import com.luv2code.springboot.thymeleafdemo.entity.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriorityServiceImpl implements PriorityService{
    @Autowired
    private PriorityRepository priorityRepository;

    @Override
    public List<Priority> getAllPriorities() {
        return priorityRepository.findAll();
    }
}
