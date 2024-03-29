package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.TabAttribute;
import com.tn.value.projectService.entity.Tag;
import com.tn.value.projectService.repository.AttributeRepository;
import com.tn.value.projectService.repository.ModelRepository;
import com.tn.value.projectService.service.IAttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AttributeServiceImpl implements IAttributeService {

    @Autowired
    AttributeRepository attributeRepository;

    @Override
    public List<TabAttribute> getAll() {
        return  attributeRepository.findAll();
    }

    @Override
    public List<TabAttribute> getAllByIdTab(Long idTab) {
        return attributeRepository.getAllByIdTab(idTab);
    }

    @Override
    public Set<Tag> getTagsForAttribute(Long idAtt) {
        Optional<TabAttribute> attributeOptional = attributeRepository.findById(idAtt);
        if (attributeOptional.isPresent()) {
            return attributeOptional.get().getTags();
        }
        return Collections.emptySet();
    }

    @Override
    public TabAttribute add(TabAttribute a) {
        return attributeRepository.save(a);
    }

    @Override
    public void delete(Long id) {
        attributeRepository.deleteById(id);
    }

    @Override
    public TabAttribute update(TabAttribute a) {
        return attributeRepository.save(a);
    }

    @Override
    public TabAttribute getById(Long id) {
        return attributeRepository.findById(id).orElse(null);
    }
}
