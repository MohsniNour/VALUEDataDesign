package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.Tag;
import com.tn.value.projectService.repository.TagRepository;
import com.tn.value.projectService.service.ITagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements ITagService {
    @Autowired
    TagRepository tagRepository;

    @Override
    public List<Tag> getAll() { return  tagRepository.findAll(); }
    @Override
    public Tag add(Tag t) {
        tagRepository.save(t);
        return t;
    }
    @Override
    public void delete(Long id) { tagRepository.deleteById(id);}

    @Override
    public Tag update(Tag t) {
        tagRepository.save(t);
        return t;
    }

    @Override
    public Tag getById(Long id) { return tagRepository.findById(id).orElse(null); }
}