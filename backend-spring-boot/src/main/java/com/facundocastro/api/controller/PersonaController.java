package com.facundocastro.api.controller;

import com.facundocastro.api.model.*;
import com.facundocastro.api.payload.request.EditarHeroRequest;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona")
public class PersonaController {
    @Autowired
    UsuarioRepository usuarioRepository;

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
