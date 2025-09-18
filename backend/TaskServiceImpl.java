package com.luv2code.springboot.thymeleafdemo.service;

import com.luv2code.springboot.thymeleafdemo.dao.TaskRepository;
import com.luv2code.springboot.thymeleafdemo.dao.UserRepository;
import com.luv2code.springboot.thymeleafdemo.entity.Task;
import com.luv2code.springboot.thymeleafdemo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task createTask(Task task) {
        // Optional: validate creator and assignee
        if (task.getCreator() != null) {
            User creator = userRepository.findById(task.getCreator().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Creator not found"));
            task.setCreator(creator);
        }

        if (task.getAssignee() != null) {
            User assignee = userRepository.findById(task.getAssignee().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Assignee not found"));
            task.setAssignee(assignee);
        }

        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(int taskId, Task updatedTask) {
        Task existingTask = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with ID: " + taskId));

        // Update fields if provided
        if (updatedTask.getTitle() != null) existingTask.setTitle(updatedTask.getTitle());
        if (updatedTask.getDescription() != null) existingTask.setDescription(updatedTask.getDescription());
        if (updatedTask.getStatus() != null) existingTask.setStatus(updatedTask.getStatus());
        if (updatedTask.getPriority() != null) existingTask.setPriority(updatedTask.getPriority());

        if (updatedTask.getAssignee() != null) {
            User assignee = userRepository.findById(updatedTask.getAssignee().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Assignee not found"));
            existingTask.setAssignee(assignee);
        }

        return taskRepository.save(existingTask);
    }

    @Override
    public void deleteTask(int taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with ID: " + taskId));
        taskRepository.delete(task);
    }
}
