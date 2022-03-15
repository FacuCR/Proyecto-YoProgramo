package com.facundocastro.api.model;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class Localizacion {
    private String pais;
    private String ciudad;
}
