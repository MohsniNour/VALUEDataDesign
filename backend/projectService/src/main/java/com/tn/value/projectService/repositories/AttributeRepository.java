package com.tn.value.projectService.repositories;

import com.tn.value.projectService.entities.TabAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributeRepository extends JpaRepository<TabAttribute, Long> {
}
