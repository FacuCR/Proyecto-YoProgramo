package com.facundocastro.api.model;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Imagen {
    @NotNull
    private String ruta;
    @NotNull
    private String archivo;
}
