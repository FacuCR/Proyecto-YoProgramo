package com.facundocastro.api.model;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Imagenes {
    private String bg;
    private String perfil;
}
