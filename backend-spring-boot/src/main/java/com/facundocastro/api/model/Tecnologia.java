package com.facundocastro.api.model;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Tecnologia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String nombre;
    private String color;
    @Temporal(TemporalType.DATE)
    private Date fechaI;
    @Temporal(TemporalType.DATE)
    private Date fechaF;
}
