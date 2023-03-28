package com.tn.value.projectService.service;

import com.tn.value.projectService.entity.TabAttribute;

import java.util.List;

public interface IAttributeService {

    List<TabAttribute> getAll();
    TabAttribute add(TabAttribute a);
    void delete(Long id);
    TabAttribute update(TabAttribute a);
    TabAttribute getById(Long id);
    String getStatus();
}