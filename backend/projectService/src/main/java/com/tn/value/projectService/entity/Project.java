package com.tn.value.projectService.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import lombok.*;


@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Project implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idProject;
	
	public String name;

	@ManyToOne
	private User user;
	
	@OneToMany
	private Set<Model> models;
	
	
	
}
