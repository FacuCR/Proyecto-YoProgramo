package com.facundocastro.api.payload.request;

import com.facundocastro.api.model.Usuario;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Lob;

@Getter
@Setter
public class ProyectoRequest {
    private String titulo;
    @Lob
    private String descripcion;
    private String url;
    private Usuario usuario = new Usuario();
}
