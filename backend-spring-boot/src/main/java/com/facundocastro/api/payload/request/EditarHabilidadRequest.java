package com.facundocastro.api.payload.request;

import com.facundocastro.api.model.Usuario;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EditarHabilidadRequest {
    private String nombre;
    private String color;
    private String clase;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date fechaI;
    private Usuario usuario = new Usuario();
}
