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
public class Model implements Serializable{

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idModel;
	
	public String nameModel;
	
	@ManyToOne
	private Project project;
	
	@OneToMany
	private Set<Tab> tabs;
	
	
	
}
