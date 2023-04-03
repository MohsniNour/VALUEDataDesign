package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.service.IModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/models")
public class ModelRestController {

    @Autowired
    IModelService modelService;

    // http://localhost:8089/VALUE/models/getAll
    @GetMapping("")
    @ResponseBody
    public List<Model> getAllById(@PathVariable("id") Long id) {
        return modelService.getAllById(id);
    }

    // http://localhost:8089/VALUE/models/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Model getById(@PathVariable("id") Long id) {
        return modelService.getById(id);
    }

    // http://localhost:8089/VALUE/models/add
    @PostMapping("/add")
    @ResponseBody
    public Model add(@RequestBody Model m) {
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
        model.setIdModel(id);
        return modelService.update(model);
    }
}
