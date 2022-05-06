package com.facundocastro.api.payload.response;

import com.facundocastro.api.model.Proyecto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseImgProyecto {
    private String nombre;
    private String url;
    private String tipo;
    private long tamanio;
    private Long idProyecto;
}
