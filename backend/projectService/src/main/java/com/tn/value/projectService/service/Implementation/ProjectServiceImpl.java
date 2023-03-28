package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.Project;
import com.tn.value.projectService.repository.ProjectRepository;
import com.tn.value.projectService.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectServiceImpl implements IProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Override
    public List<Project> getAll() {
        return  projectRepository.findAll();
    }

    @Override
    public Project add(Project p) {
       return projectRepository.save(p);
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
        return projectRepository.findById(id).orElse(null);
    }
}
