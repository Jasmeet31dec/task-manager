package com.luv2code.springboot.thymeleafdemo.controller;

import com.luv2code.springboot.thymeleafdemo.entity.Priority;
import com.luv2code.springboot.thymeleafdemo.entity.Status;
import com.luv2code.springboot.thymeleafdemo.service.PriorityService;
import com.luv2code.springboot.thymeleafdemo.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/priority")
public class PriorityController {

    private final PriorityService priorityService;
    public PriorityController(PriorityService priorityService) {
        this.priorityService = priorityService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Priority>> getAllStatuses() {
        List<Priority> priorities = priorityService.getAllPriorities();
        return ResponseEntity.ok(priorities);
    }
}
