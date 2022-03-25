package com.facundocastro.api.controller;

import com.facundocastro.api.model.*;
import com.facundocastro.api.payload.request.EditarHeroRequest;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.service.IImgStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona")
public class PersonaController {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    IImgStorageService storageService;

    @GetMapping("/obtener")
    public Optional<Usuario> obtenerDatosDelUsuario()
    {
        return usuarioRepository.findById(2L);
    }

    @PutMapping("/editar/hero")
    @PreAuthorize("hasRole('ADMIN')")
    public void editarNombreYApellido(@Valid @RequestBody EditarHeroRequest editarHeroRequest) {
        Usuario usuario = usuarioRepository.findById(2L).get();
        Persona persona = usuario.getPersona();

        persona.setNombre(editarHeroRequest.getNombre());
        persona.setApellido(editarHeroRequest.getApellido());
        persona.setOcupacion(editarHeroRequest.getOcupacion());
        usuario.setPersona(persona);

        usuarioRepository.save(usuario);
    }
}
