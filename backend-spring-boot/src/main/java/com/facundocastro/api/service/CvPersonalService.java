package com.facundocastro.api.service;

import com.facundocastro.api.model.CvPersonal;
import com.facundocastro.api.model.ImagenPerfil;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.repository.CvPersonalRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.regex.Pattern;
import java.util.stream.Stream;

@Service
public class CvPersonalService implements ICvPersonalService{
    @Autowired
    private CvPersonalRepository cvRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public CvPersonal store(MultipartFile file) throws IOException {
        String separador = Pattern.quote("/");
        CvPersonal cv = cvRepository.findByNombre("cv").orElse(new CvPersonal());
        String type = "." + file.getContentType().split(separador)[1];
        cv.setNombre("cv" + type);
        cv.setTipo(file.getContentType());
        cv.setData(file.getBytes());
        Usuario usuario = usuarioRepository.findById(2L).orElseThrow();
        cv.setUsuario(usuario);
        return cvRepository.save(cv);
    }

    @Override
    public CvPersonal getFile(String nombre) {
        return cvRepository.findByNombre(nombre).get();
    }

    @Override
    public Stream<CvPersonal> getAllFiles() {
        return cvRepository.findAll().stream();
    }

    @Override
    public void deleteFile() {
        cvRepository.deleteAll();
    }
}
