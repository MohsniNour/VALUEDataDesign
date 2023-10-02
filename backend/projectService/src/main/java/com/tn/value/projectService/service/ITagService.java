package com.tn.value.projectService.service;

import com.tn.value.projectService.entity.Tag;

import java.util.List;

public interface ITagService {
    List<Tag> getAll();

    //List<Tag> getAllByIdAttribute(Long idAttribute);

    Tag add(Tag t);

    void delete(Long id);

    Tag update(Tag t);

    Tag getById(Long id);
}
