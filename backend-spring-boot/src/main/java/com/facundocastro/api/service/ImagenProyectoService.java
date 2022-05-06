package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenProyecto;
import com.facundocastro.api.model.Proyecto;
import com.facundocastro.api.repository.ImagenProyectoRepository;
import com.facundocastro.api.repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.regex.Pattern;
import java.util.stream.Stream;

@Service
public class ImagenProyectoService implements IImagenProyectoService {
    @Autowired
    private ImagenProyectoRepository imagenProyectoRepository;
    @Autowired
    private ProyectoRepository proyectoRepository;

    @Override
    public ImagenProyecto store(MultipartFile file, Long idProyecto) throws IOException {
        String separador = Pattern.quote("/");
        ImagenProyecto imagenProyectoNuevo = new ImagenProyecto();
        String type = "." + file.getContentType().split(separador)[1];
        Proyecto proyectoAAgregarImagen = proyectoRepository.findById(idProyecto).get();

        if (imagenProyectoRepository.findByProyecto_Id(idProyecto).isPresent()){
            imagenProyectoNuevo = imagenProyectoRepository.findByProyecto_Id(idProyecto).orElseThrow();
        }

        imagenProyectoNuevo.setNombre(proyectoAAgregarImagen.getTitulo() + type);
        imagenProyectoNuevo.setTipo(file.getContentType());
        imagenProyectoNuevo.setData(file.getBytes());
        imagenProyectoNuevo.setProyecto(proyectoAAgregarImagen);

        return imagenProyectoRepository.save(imagenProyectoNuevo);
    }

    @Override
    public ImagenProyecto getFile(String nombre) {
        return imagenProyectoRepository.findByNombre(nombre).get();
    }

    @Override
    public Stream<ImagenProyecto> getAllFiles() {
        return imagenProyectoRepository.findAll().stream();
    }
}
