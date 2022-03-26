package com.facundocastro.api.model;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.io.File;
import java.util.Date;
import java.util.List;

@Data
@Embeddable
public class Persona {
    @NotNull
    private String nombre;
    @NotNull
    private String apellido;
    private String ocupacion;
    private boolean disponibilidad;
    private Date fechaNac;
    @Lob
    private String sobreMi;
    @Lob
    private String descripcion;
    @Embedded
    private Localizacion localizacion;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Proyecto> proyects;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Educacion> educaciones;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Tecnologia> tecnologias;
}
