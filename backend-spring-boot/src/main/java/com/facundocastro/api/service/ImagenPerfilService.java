package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenPerfil;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.repository.ImagenPerfilRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.regex.Pattern;
import java.util.stream.Stream;

@Service
public class ImagenPerfilService implements IImagenPerfilService {
    @Autowired
    private ImagenPerfilRepository imagenPerfilRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;


    @Override
    public ImagenPerfil store(MultipartFile file) throws IOException {
        String separador = Pattern.quote("/");
        ImagenPerfil imgPerfil = imagenPerfilRepository.findById(1L).orElse(new ImagenPerfil());
        String type = "." + file.getContentType().split(separador)[1];
        imgPerfil.setNombre("foto-perfil" + type);
        imgPerfil.setTipo(file.getContentType());
        imgPerfil.setData(file.getBytes());
        Usuario usuario = usuarioRepository.findById(2L).orElseThrow();
        imgPerfil.setUsuario(usuario);
        return imagenPerfilRepository.save(imgPerfil);
    }

    @Override
    public ImagenPerfil getFile(String nombre) {
        return imagenPerfilRepository.findByNombre(nombre).get();
    }

    @Override
    public Stream<ImagenPerfil> getAllFiles() {
        return imagenPerfilRepository.findAll().stream();
    }
}
