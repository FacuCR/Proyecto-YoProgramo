package com.facundocastro.api.service;

import com.facundocastro.api.model.ImagenBG;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.repository.ImagenBGRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.regex.Pattern;
import java.util.stream.Stream;

@Service
public class ImagenBGService implements IImagenBGService{
    @Autowired
    private ImagenBGRepository imgRepo;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public ImagenBG store(MultipartFile file) throws IOException {
        String separador = Pattern.quote("/");
        ImagenBG bg = imgRepo.findById(1L).orElse(new ImagenBG());
        String type = "." + file.getContentType().split(separador)[1];
        bg.setNombre("hero-bg" + type);
        bg.setTipo(file.getContentType());
        bg.setData(file.getBytes());
        Usuario usuario = usuarioRepository.findById(2L).orElseThrow();
        bg.setUsuario(usuario);
        return imgRepo.save(bg);
    }

    @Override
    public ImagenBG getFile(String nombre) {
        return imgRepo.findByNombre(nombre).get();
    }

    @Override
    public Stream<ImagenBG> getAllFiles() {
        return imgRepo.findAll().stream();
    }
}
