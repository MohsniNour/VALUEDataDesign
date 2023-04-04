package com.tn.value.projectService.repository;


import com.tn.value.projectService.entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {

    @Query("SELECT model FROM Model model WHERE model.project.idProject = :idProject")
    List<Model> getAllByIdProject(Long idProject);

}
