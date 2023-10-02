package com.tn.value.projectService.service.Implementation;

import com.tn.value.projectService.entity.Tab;
import com.tn.value.projectService.repository.TabRepository;
import com.tn.value.projectService.service.ITabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TabServiceImpl implements ITabService {

    @Autowired
    TabRepository tabRepository;
    @Override
    public List<Tab> getAll() {
        return  tabRepository.findAll();
    }

    @Override
    public List<Tab> getAllByIdModel(Long id) {
        return tabRepository.getAllByIdModel(id);
    }

    @Override
    public Tab add(Tab t) {
        tabRepository.save(t);
        return t;
    }
    @Override
    public void delete(Long id) { tabRepository.deleteById(id); }

    @Override
    public Tab update(Tab t) { return tabRepository.save(t); }

    @Override
    public Tab getById(Long id) {
        return tabRepository.findById(id).orElse(null);
    }
}
