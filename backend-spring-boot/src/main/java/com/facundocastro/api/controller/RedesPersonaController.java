package com.facundocastro.api.controller;

import com.facundocastro.api.model.Redes;
import com.facundocastro.api.repository.RedesPersonaRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona/redes")
public class RedesPersonaController {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    RedesPersonaRepository redesRepo;

    @PostMapping("/crear")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Redes> crearRed(@RequestBody Redes redRequest) {
        Redes red = usuarioRepository.findById(2L).map(usuario -> {
            redRequest.setUsuario(usuario);
            return redesRepo.save(redRequest);
        }).orElseThrow();
        return new ResponseEntity<>(red, HttpStatus.CREATED);
    }

    @GetMapping("/traer/todas")
    public ResponseEntity<List<Redes>> traerTodasLasRedes() {
        List<Redes> redes = redesRepo.findByUsuarioId(2L);
        return new ResponseEntity<>(redes, HttpStatus.OK);
    }

    @PutMapping("/actualizar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Redes> actualizarRed(@PathVariable Long id, @RequestBody Redes redRequest) {
        Redes red = redesRepo.findById(id)
                .orElseThrow();
        red.setUrl(redRequest.getUrl());
        red.setNombre(redRequest.getNombre());
        red.setClase(redRequest.getClase());
        return new ResponseEntity<>(redesRepo.save(red), HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> borrarRed(@PathVariable("id") Long id) {
        redesRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
