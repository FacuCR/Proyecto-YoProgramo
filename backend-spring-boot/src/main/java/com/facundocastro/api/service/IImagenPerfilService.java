package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenPerfil;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface IImagenPerfilService {
    public ImagenPerfil store(MultipartFile file) throws IOException;
    public ImagenPerfil getFile(String nombre);
    public Stream<ImagenPerfil> getAllFiles();
}
