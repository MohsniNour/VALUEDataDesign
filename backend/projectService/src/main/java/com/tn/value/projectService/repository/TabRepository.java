package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.Tab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TabRepository extends JpaRepository<Tab, Long> {

    @Query("SELECT tab FROM Tab tab WHERE tab.model.idModel = :id")
    List<Tab> getAllByIdModel(Long id);

}
