package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.service.IModelService;
import com.tn.value.projectService.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/models")
public class ModelRestController {

    @Autowired
    IModelService modelService;
    @Autowired
    IProjectService projectService;

    // http://localhost:8089/VALUE/models
    @GetMapping("")
    @ResponseBody
    public List<Model> getAll() {
        return modelService.getAll();
    }

    // http://localhost:8089/VALUE/models/1
    @GetMapping("/{id}")
    @ResponseBody
    public List<Model> getAllByIdProject(@PathVariable("id") Long idProject) {
        return modelService.getAllByIdProject(idProject);
    }

    // http://localhost:8089/VALUE/models/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Model getById(@PathVariable("id") Long id) {
        return modelService.getById(id);
    }

    // http://localhost:8089/VALUE/models/add
    @PostMapping("/add/{id}")
    @ResponseBody
    public Model add(@PathVariable("id") Long id,@RequestBody Model m) {
        Project project = projectService.getById(id);
        m.setProject(project);
        return modelService.add(m);
    }

    // http://localhost:8089/VALUE/models/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        modelService.delete(id);
    }

    // http://localhost:8089/VALUE/models/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public Model update(@RequestBody Model model,@PathVariable("id") Long id) {
        Model m = modelService.getById(id);
        model.setProject(m.getProject());
        model.setIdModel(id);
        return modelService.update(model);
    }
}
