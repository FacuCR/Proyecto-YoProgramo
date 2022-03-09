package com.facundocastro.api.controller;

import com.facundocastro.api.model.Persona;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/editar")
    @PreAuthorize("hasRole('ADMIN')")
    public void editarNombreYApellido(@RequestParam String nombre, @RequestParam String apellido) {
        Usuario usuario = usuarioRepository.findById(Long.valueOf(2)).get();
        Persona persona = usuario.getPersona();

        persona.setNombre(nombre);
        persona.setApellido(apellido);
        usuario.setPersona(persona);

        usuarioRepository.save(usuario);
    }
}
