package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.Association;
import com.tn.value.projectService.repository.AssociationRepository;
import com.tn.value.projectService.service.IAssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssociationServiceImpl implements IAssociationService {

    @Autowired
    AssociationRepository associationRepository;

    @Override
    public List<Association> getAll() {
        return  associationRepository.findAll();
    }

    @Override
    public Association add(Association a) {
        return associationRepository.save(a);
    }

    @Override
    public void delete(Long id) {
        associationRepository.deleteById(id);
    }

    @Override
    public Association update(Association a) {
        return associationRepository.save(a);
    }

    @Override
    public Association getById(Long id) {
        return associationRepository.findById(id).orElse(null);
    }
}
