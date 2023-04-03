package com.tn.value.projectService.service;


import com.tn.value.projectService.entity.Model;

import java.util.List;

public interface IModelService {
    List<Model> getAll();

    Model add(Model m);

    void delete(Long id);

    Model update(Model m);

    Model getById(Long id);
}
