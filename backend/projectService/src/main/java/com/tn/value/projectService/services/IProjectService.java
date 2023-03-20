package com.tn.value.projectService.services;

import com.tn.value.projectService.entities.Project;

import java.util.List;

public interface IProjectService {

    List<Project> getAll();

    Project add(Project p);

    void delete(Long id);

    Project update(Project p);

    Project getById(Long id);

}
