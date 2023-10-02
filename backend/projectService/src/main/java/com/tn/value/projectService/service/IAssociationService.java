package com.tn.value.projectService.service;

import com.tn.value.projectService.entity.Association;

import java.util.List;

public interface IAssociationService {

    List<Association> getAll();

    List<Association> getAllByIdTab(Long idTab);

    Association add(Association a);

    void delete(Long id);

    Association update(Association a);

    Association getById(Long id);

}
