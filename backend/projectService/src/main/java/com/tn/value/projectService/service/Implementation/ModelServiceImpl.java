package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.repository.ModelRepository;
import com.tn.value.projectService.service.IModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelServiceImpl implements IModelService {

    @Autowired
    ModelRepository modelRepository;
    @Override
    public List<Model> getAllById(Long id) {
        return  modelRepository.findAll();
    }

    @Override
    public Model add(Model m) {
        return modelRepository.save(m);
    }

    @Override
    public void delete(Long id) {
        modelRepository.deleteById(id);
    }

    @Override
    public Model update(Model m) {
        return modelRepository.save(m);
    }

    @Override
    public Model getById(Long id) {
        return modelRepository.findById(id).orElse(null);
    }
}
