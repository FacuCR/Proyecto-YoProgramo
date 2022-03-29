package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenBG;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface IImagenBGService {
    public ImagenBG store(MultipartFile file) throws IOException;
    public ImagenBG getFile(String nombre);
    public Stream<ImagenBG> getAllFiles();
}
