package com.facundocastro.api.controller;

import com.facundocastro.api.model.*;
import com.facundocastro.api.payload.request.EditarHeroRequest;
import com.facundocastro.api.payload.request.EditarSobreMiRequest;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<MessageResponse> editarNombreYApellido(@Valid @RequestBody EditarHeroRequest editarHeroRequest) {
        String message;
        try {
            Usuario usuario = usuarioRepository.findById(2L).get();
            Persona persona = usuario.getPersona();

            persona.setNombre(editarHeroRequest.getNombre());
            persona.setApellido(editarHeroRequest.getApellido());
            persona.setOcupacion(editarHeroRequest.getOcupacion());
            usuario.setPersona(persona);

            usuarioRepository.save(usuario);
            message = "Se guardo correctamente";
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
        } catch (Exception e) {
            message = "No se pudo actualizar los datos!: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }

    @PutMapping("/editar/sobremi")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> editarSobreMi(@Valid @RequestBody EditarSobreMiRequest editarSobreMiRequest) {
        String message;
        try {
            Usuario usuario = usuarioRepository.findById(2L).get();
            Persona persona = usuario.getPersona();
            Localizacion localizacion = new Localizacion();

            persona.setSobreMi(editarSobreMiRequest.getSobreMi());
            persona.setFechaNac(editarSobreMiRequest.getFechaNac());
            persona.setDescripcion(editarSobreMiRequest.getDescripcion());
            localizacion.setPais(editarSobreMiRequest.getPais());
            localizacion.setCiudad(editarSobreMiRequest.getCiudad());
            persona.setLocalizacion(localizacion);
            persona.setDisponibilidad(editarSobreMiRequest.isDisponibilidad());
            usuario.setPersona(persona);

            usuarioRepository.save(usuario);
            message = "Se guardo correctamente";
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
        } catch (Exception e) {
            message = "No se pudo actualizar los datos!: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }
}
