package com.tn.value.projectService.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Association implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long idJoin;
    public Long idBindingTable;
    public String typeBindingTable;
    public Long idBoundTable;
    public String typeBoundTable;

    public String value;
    @ManyToOne
    private TabAttribute attribute;


}
