package com.facundocastro.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseFile {
    private String nombre;
    private String url;
    private String tipo;
    private long tamanio;
}
