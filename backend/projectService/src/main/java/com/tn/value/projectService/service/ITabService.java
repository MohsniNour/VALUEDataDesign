package com.tn.value.projectService.service;


import com.tn.value.projectService.entity.Tab;

import java.util.List;

public interface ITabService {

    List<Tab> getAll();

    List<Tab> getAllByIdModel(Long id);

    Tab add(Tab t);

    void delete(Long id);

    Tab update(Tab t);

    Tab getById(Long id);
}
