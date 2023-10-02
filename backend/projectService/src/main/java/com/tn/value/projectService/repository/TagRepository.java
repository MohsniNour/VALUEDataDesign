package com.tn.value.projectService.repository;

import com.tn.value.projectService.entity.Model;
import com.tn.value.projectService.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    //@Query("SELECT tag FROM Tag tag WHERE tag.attribute.idAttribute = :idAttribute")
    //List<Tag> getAllByIdAttribute(Long idAttribute);
}
