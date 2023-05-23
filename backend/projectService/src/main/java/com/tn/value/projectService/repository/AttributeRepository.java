package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.TabAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttributeRepository extends JpaRepository<TabAttribute, Long> {

    @Query("SELECT attribute FROM TabAttribute attribute WHERE attribute.tab.idTable = :idTab")
    List<TabAttribute> getAllByIdTab(Long idTab);
}
