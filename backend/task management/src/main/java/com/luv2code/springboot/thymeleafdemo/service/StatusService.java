package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.entity.Status;
import com.luv2code.springboot.thymeleafdemo.entity.Task;

import java.util.List;

public interface StatusService {
    List<Status> getAllStatus();
}
