package com.facundocastro.api.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String institucion;
    private String descripcion;
    @Temporal(TemporalType.DATE)
    private Date fechaI;
    @Temporal(TemporalType.DATE)
    private Date fechaF;
}
