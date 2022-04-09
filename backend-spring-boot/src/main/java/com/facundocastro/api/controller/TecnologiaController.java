package com.facundocastro.api.controller;

import com.facundocastro.api.model.Tecnologia;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.service.ITecnologiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/tecnologia")
public class TecnologiaController {
    @Autowired
    ITecnologiaService tecnologiaService;

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/crear")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> saveTecnologia(@RequestBody Tecnologia tecnologia) {
        String mensaje;
        if (tecnologiaService.getTecnologia(tecnologia.getNombre()).isPresent()){
            mensaje = "La tecnologia que intenta agregar ya existe " + tecnologia.getNombre();
        }
        else {
            tecnologiaService.saveTecnologia(tecnologia);
            mensaje = "Guardado con exito la tecnologia de " + tecnologia.getNombre();
        }
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(mensaje));
    }

    @PostMapping("/crear/varias")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> saveAllTecnologias(@RequestBody List<Tecnologia> tecnologias){
        String mensaje;
        try {
            tecnologiaService.saveAllTecnologias(tecnologias);
            mensaje = "Tecnologias Guardadas con exito";
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(mensaje));
        } catch (Exception e) {
            mensaje = "No se pudieron guardar las tecnologias, ERROR: " + e.getMessage() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(mensaje));
        }
    }

    @GetMapping("/traer")
    public Optional<Tecnologia> findTecnologia(@RequestParam String nombreTecnologia){
        return tecnologiaService.getTecnologia(nombreTecnologia);
    }

    @GetMapping("/traer/todas")
    public List<Tecnologia> findAllTecnologias(){
        return tecnologiaService.getAllTecnologias();
    }

}
