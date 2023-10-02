package com.tn.value.projectService.service;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.TabAttribute;
import com.tn.value.projectService.entity.Tag;

import java.util.List;
import java.util.Set;

public interface IAttributeService {

    List<TabAttribute> getAll();
    List<TabAttribute> getAllByIdTab(Long idTab);
    Set<Tag> getTagsForAttribute(Long idAtt);
    TabAttribute add(TabAttribute a);
    void delete(Long id);
    TabAttribute update(TabAttribute a);
    TabAttribute getById(Long id);
}
