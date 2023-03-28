package com.tn.value.projectService.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tab implements Serializable{

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long idTable;
	
	public String name;
	public String description;
	public String status;
	@ManyToOne
	private Model model;
	@OneToMany
	private Set<TabAttribute> attributes;
	@OneToMany
	private Set<Association> joins;
	@OneToOne
	private Position position;
	
	
	
}
