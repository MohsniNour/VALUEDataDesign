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
public class TabAttribute implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long idAttribute;
	public String name;
	public String description;
	public String type;
	public int lengthAttribute;
	public int decimalAttribute;
	public Boolean requiredAttribute;
	public Boolean PKey;
	public Boolean FKey;
	@ManyToOne
	private Tab tab;
	@ManyToMany
	private Set<Tag> tags;

	
	
	
}
