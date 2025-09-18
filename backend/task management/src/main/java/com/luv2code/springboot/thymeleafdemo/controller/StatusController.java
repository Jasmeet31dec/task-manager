package com.luv2code.springboot.thymeleafdemo.controller;

import com.luv2code.springboot.thymeleafdemo.entity.Status;
import com.luv2code.springboot.thymeleafdemo.service.StatusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/status")
public class StatusController {

    private StatusService statusService;
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Status>> getAllStatuses() {
        List<Status> statuses = statusService.getAllStatus();
        return ResponseEntity.ok(statuses);
    }
}