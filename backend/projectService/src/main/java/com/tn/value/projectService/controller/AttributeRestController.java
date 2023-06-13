package com.tn.value.projectService.controller;

import com.tn.value.projectService.entity.*;
import com.tn.value.projectService.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/attributes")
public class AttributeRestController {

    @Autowired
    IAttributeService attributeService;
    @Autowired
    ITabService tabService;

    // http://localhost:8089/VALUE/attributes
    @GetMapping("")
    @ResponseBody
    public List<TabAttribute> getAll() {
        return attributeService.getAll();
    }

    // http://localhost:8089/VALUE/attributes/1
    @GetMapping("/{id}")
    @ResponseBody
    public List<TabAttribute> getAllByIdTab(@PathVariable("id") Long idTab) {
        return attributeService.getAllByIdTab(idTab);
    }

    // http://localhost:8089/VALUE/attributes/getById/1
    @GetMapping("/getById/{id}")
    @ResponseBody
    public TabAttribute getById(@PathVariable("id") Long id) {
        return attributeService.getById(id);
    }

    // http://localhost:8089/VALUE/attributes/add
    @PostMapping("/add/{id}")
    @ResponseBody
    public TabAttribute add(@PathVariable("id") Long id,@RequestBody TabAttribute a) {
        Tab tab = tabService.getById(id);
        a.setTab(tab);
        return attributeService.add(a);
    }

    // http://localhost:8089/VALUE/attributes/delete/1
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public void delete(@PathVariable("id") Long id) {
        attributeService.delete(id);
    }

    // http://localhost:8089/VALUE/attributes/update/1
    @PutMapping("/update/{id}")
    @ResponseBody
    public TabAttribute update(@RequestBody TabAttribute attribute,@PathVariable("id") Long id) {
        TabAttribute a = attributeService.getById(id);
        attribute.setTab(a.getTab());
        attribute.setIdAttribute(id);
        return attributeService.update(attribute);
    }

    // http://localhost:8089/VALUE/tabs/getById/1
    @GetMapping("/export/excel/{id}")
    public void exportToExcel(HttpServletResponse response,@PathVariable("id") Long id) throws IOException {
        System.out.println("export to Excel ...");
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=table_"+currentDateTime+".xlsx";
        response.setHeader(headerKey,headerValue);
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM.getType());
        List<TabAttribute> attributeList = attributeService.getAllByIdTab(id);
        AttributeExcel excel = new AttributeExcel(attributeList);
        excel.export(response);

    }
/*
    // http://localhost:8089/VALUE/tabs/getById/1
    @GetMapping("/export/pdf/{id}")
    public ResponseEntity<InputStreamResource> exportToPDF(@PathVariable("id") Long id) throws IOException {
        List<TabAttribute> attributeList = attributeService.getAllByIdTab(id);
        ByteArrayInputStream bais = exportAttributeService.attributePDFReport(attributeList);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition","inline;filename.pdf");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(new InputStreamResource(bais));

    }

 */
}
