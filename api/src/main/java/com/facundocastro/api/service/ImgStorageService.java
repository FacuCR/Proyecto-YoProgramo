package com.facundocastro.api.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;
import java.util.stream.Stream;

@Service
public class ImgStorageService implements IImgStorageService{
    private final Path root = Paths.get("uploads");

    @Override
    public void init() {
        try {
            Files.createDirectory(root);
        } catch (IOException e) {
            throw new RuntimeException("no se pudo inicializar la carpeta para subir imagenes");
        }
    }

    @Override
    public void save(MultipartFile file) {
        try {
            int index = Objects.requireNonNull(file.getOriginalFilename()).lastIndexOf('.');
            String extension = file.getOriginalFilename().substring(index + 1);
            Files.copy(file.getInputStream(), this.root.resolve("hero-bg."+extension), StandardCopyOption.REPLACE_EXISTING);
        } catch(Exception e) {
            throw new RuntimeException("No se pudo guardar la imagen. Error: " + e.getMessage());
        }
    }

    @Override
    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return  resource;
            } else {
                throw new RuntimeException("No se puede leer el archivo");
            }
        } catch(MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException("Could not load the files!");
        }
    }
}
