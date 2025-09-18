package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.entity.Task;

import java.util.List;

public interface TaskService {

    List<Task> getAllTasks();

    Task updateTask(int id, Task task);

    Task createTask(Task task);

    void deleteTask(int theId);
}
