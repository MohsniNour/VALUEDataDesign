package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.entity.User;
import com.tn.value.projectService.service.IProjectService;
import com.tn.value.projectService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/projects")
public class ProjectRestController {

    @Autowired
    IProjectService projectService;

    @Autowired
    IUserService userService;

    // http://localhost:8089/VALUE/project/getAll
    @GetMapping("")
    @ResponseBody
    public List<Project> getAll() { return projectService.getAll(); }

    // http://localhost:8089/VALUE/project/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Project getById(@PathVariable("id") Long id) {
        return projectService.getById(id);
    }

    // http://localhost:8089/VALUE/project/add
    @PostMapping("/add")
    @ResponseBody
    public Project add(@RequestBody Project p) {
        p.setLastUpdatedDate(LocalDateTime.now());
        return projectService.add(p);
    }

    // http://localhost:8089/VALUE/project/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        projectService.delete(id);
    }

    // http://localhost:8089/VALUE/project/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public Project update(@RequestBody Project project,@PathVariable("id") Long id) {
        Project p = projectService.getById(id);
        p.setName(project.name);
        p.setLastUpdatedDate(LocalDateTime.now());
        return projectService.update(p);
    }

}

