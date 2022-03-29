package com.facundocastro.api.payload.request;

import com.facundocastro.api.model.Localizacion;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EditarSobreMiRequest {
    private String sobreMi;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date fechaNac;
    private String descripcion;
    private String pais;
    private String ciudad;
    private boolean disponibilidad;
}
