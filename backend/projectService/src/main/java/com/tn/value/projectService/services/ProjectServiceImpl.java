package com.tn.value.projectService.services;

import com.tn.value.projectService.entities.Project;
import com.tn.value.projectService.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectServiceImpl implements IProjectService{

    @Autowired
    ProjectRepository projectRepository;

    @Override
    public List<Project> getAll() {
        List<Project> projects = (List<Project>) projectRepository.findAll();
        return projects;
    }

    @Override
    public Project add(Project p) {
        projectRepository.save(p);
        return p;
    }

    @Override
    public void delete(Long id) {
        projectRepository.deleteById(id);
    }

    @Override
    public Project update(Project p) {
        return projectRepository.save(p);
    }

    @Override
    public Project getById(Long id) {
        Project project = projectRepository.findById(id).orElse(null);
        return project;
    }
}
