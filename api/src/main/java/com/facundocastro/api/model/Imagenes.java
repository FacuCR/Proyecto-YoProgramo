package com.facundocastro.api.model;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Imagenes {
    @NotNull
    private String ruta;
    @NotNull
    private String bg;
    @NotNull
    private String perfil;
}
