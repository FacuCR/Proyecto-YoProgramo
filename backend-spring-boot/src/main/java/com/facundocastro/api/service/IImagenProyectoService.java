package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenProyecto;
import com.facundocastro.api.model.Proyecto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface IImagenProyectoService {
    public ImagenProyecto store(MultipartFile file, Long idProyecto) throws IOException;
    public ImagenProyecto getFile(String nombre);
    public Stream<ImagenProyecto> getAllFiles();
}
