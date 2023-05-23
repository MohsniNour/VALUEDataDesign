package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.Association;
import com.tn.value.projectService.service.IAssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/joins")
public class AssociationRestController {

    @Autowired
    IAssociationService associationService;


    // http://localhost:8089/VALUE/join/getAll
    @GetMapping("")
    @ResponseBody
    public List<Association> getAll() { return associationService.getAll(); }

    // http://localhost:8089/VALUE/join/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Association getById(@PathVariable("id") Long id) {
        return associationService.getById(id);
    }

    // http://localhost:8089/VALUE/join/add
    @PostMapping("/add")
    @ResponseBody
    public Association add(@RequestBody Association a) {
        return associationService.add(a);
    }

    // http://localhost:8089/VALUE/join/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        associationService.delete(id);
    }

    // http://localhost:8089/VALUE/join/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public Association update(@RequestBody Association association,@PathVariable("id") Long id) {
        return associationService.update(association);
    }

}
