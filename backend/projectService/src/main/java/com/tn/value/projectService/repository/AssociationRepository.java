package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.Association;
import com.tn.value.projectService.entity.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssociationRepository extends JpaRepository<Association, Long> {
    @Query("SELECT association FROM Association association WHERE association.bindingTable.idTable = :idTab")
    List<Association> getAllByIdTab(Long idTab);
}
