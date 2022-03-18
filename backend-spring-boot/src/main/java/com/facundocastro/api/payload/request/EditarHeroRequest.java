package com.facundocastro.api.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class EditarHeroRequest {
    @NotBlank
    String nombre;
    @NotBlank
    String apellido;
    @NotBlank
    String ocupacion;
}
