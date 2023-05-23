package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.Tab;
import com.tn.value.projectService.service.IModelService;
import com.tn.value.projectService.service.ITabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.Attribute;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/tabs")
public class TabRestController {

    @Autowired
    IModelService modelService;
    @Autowired
    ITabService tabService;

    // http://localhost:8089/VALUE/tabs
    @GetMapping("")
    @ResponseBody
    public List<Tab> getAll() {
        return tabService.getAll();
    }

    // http://localhost:8089/VALUE/tabs/1
    @GetMapping("/{id}")
    @ResponseBody
    public List<Tab> getAllByIdModel(@PathVariable("id") Long id) {
        return tabService.getAllByIdModel(id);
    }

    // http://localhost:8089/VALUE/tabs/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public Tab getById(@PathVariable("id") Long id) {
        return tabService.getById(id);
    }

    // http://localhost:8089/VALUE/tabs/add
    @PostMapping("/add/{id}")
    @ResponseBody
    public Tab add(@PathVariable("id") Long id,@RequestBody Tab t) {
        Model model = modelService.getById(id);
        t.setModel(model);
        return tabService.add(t);
    }

    // http://localhost:8089/VALUE/tabs/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        tabService.delete(id);
    }

    // http://localhost:8089/VALUE/tabs/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public Tab update(@RequestBody Tab tab,@PathVariable("id") Long id) {
        Tab t = tabService.getById(id);
        tab.setModel(t.getModel());
        tab.setIdTable(id);
        return tabService.update(tab);
    }


}
