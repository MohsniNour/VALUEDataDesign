package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.TabAttribute;
import com.tn.value.projectService.entity.Tag;
import com.tn.value.projectService.service.IAttributeService;
import com.tn.value.projectService.service.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/tags")
public class TagRestController {

    @Autowired
    ITagService tagService;
    @Autowired
    IAttributeService attributeService;

    // http://localhost:8089/VALUE/models
    @GetMapping("")
    @ResponseBody
    public List<Tag> getAll() {
        return tagService.getAll();
    }

    // http://localhost:8089/VALUE/models/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Tag getById(@PathVariable("id") Long id) {
        return tagService.getById(id);
    }

    // http://localhost:8089/VALUE/models/add
    @PostMapping("/add")
    @ResponseBody
    public Tag add(@RequestBody Tag t) {
        //TabAttribute attribute = attributeService.getById(id);
        //t.setAttribute(attribute);
        return tagService.add(t);
    }


    // http://localhost:8089/VALUE/models/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        tagService.delete(id);
    }

    // http://localhost:8089/VALUE/models/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public Tag update(@RequestBody Tag tag,@PathVariable("id") Long id) {
        Tag t = tagService.getById(id);
        //tag.setAttribute(t.getAttribute());
        tag.setIdTag(id);
        return tagService.update(tag);
    }
}
