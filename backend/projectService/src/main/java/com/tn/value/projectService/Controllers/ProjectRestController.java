package com.tn.value.projectService.Controllers;

import com.tn.value.projectService.entities.Project;
import com.tn.value.projectService.entities.User;
import com.tn.value.projectService.services.IProjectService;
import com.tn.value.projectService.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectRestController {

    @Autowired
    IProjectService projectService;

    // http://localhost:8089/VALUE/project/getAll
    @GetMapping("/getAll")
    @ResponseBody
    public List<Project> getUsers() {
        List<Project> listProjects = projectService.getAll();
        return listProjects;
    }

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
        project.setIdProject(id);
        return projectService.update(project);
    }

}

