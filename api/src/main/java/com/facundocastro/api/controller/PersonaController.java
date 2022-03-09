package com.facundocastro.api.controller;

import com.facundocastro.api.model.Persona;
import com.facundocastro.api.model.Usuario;
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
        Optional<Usuario> usuario = usuarioRepository.findById(Long.valueOf(2));
        return usuario;
    }

    @PutMapping("/editar_hero")
    @PreAuthorize("hasRole('ADMIN')")
    public void editarNombreYApellido(@Valid @RequestBody EditarHeroRequest editarHeroRequest) {
        Usuario usuario = usuarioRepository.findById(Long.valueOf(2)).get();
        Persona persona = usuario.getPersona();

        persona.setNombre(editarHeroRequest.getNombre());
        persona.setApellido(editarHeroRequest.getApellido());
        persona.setOcupacion(editarHeroRequest.getOcupacion());
        usuario.setPersona(persona);

        usuarioRepository.save(usuario);
    }
}
