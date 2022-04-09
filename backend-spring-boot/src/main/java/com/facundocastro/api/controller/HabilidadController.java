package com.facundocastro.api.controller;

import com.facundocastro.api.model.Habilidad;
import com.facundocastro.api.payload.request.EditarHabilidadRequest;
import com.facundocastro.api.repository.HabilidadRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.service.IHabilidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona/habilidad")
public class HabilidadController {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    HabilidadRepository habilidadRepository;
    @Autowired
    IHabilidadService habilidadService;

    @PostMapping("/crear")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Habilidad> crearHabilidad(@RequestBody EditarHabilidadRequest habilidadRequest){
        Habilidad habilidadReqObj = new Habilidad();
        habilidadReqObj.setNombre(habilidadRequest.getNombre());
        habilidadReqObj.setColor(habilidadRequest.getColor());
        habilidadReqObj.setClase(habilidadRequest.getClase());
        habilidadReqObj.setFechaI(habilidadRequest.getFechaI());
        Habilidad habilidad = usuarioRepository.findById(2L).map(usuario -> {
            habilidadReqObj.setUsuario(usuario);
            return habilidadRepository.save(habilidadReqObj);
        }).orElseThrow();
        return new ResponseEntity<>(habilidad, HttpStatus.CREATED);
    }

    @GetMapping("/traer/todas")
    public ResponseEntity<List<Habilidad>> getAllHabilidades(){
        List<Habilidad> habilidades = habilidadService.getAllHabilidades();
        return new ResponseEntity<>(habilidades, HttpStatus.OK);
    }

    @PutMapping("/actualizar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Habilidad> updateHabilidad(@PathVariable Long id, @RequestBody EditarHabilidadRequest habilidadRequest){
        Habilidad habilidadAActualizar = habilidadService.getById(id).orElseThrow();
        habilidadAActualizar.setNombre(habilidadRequest.getNombre());
        habilidadAActualizar.setColor(habilidadRequest.getColor());
        habilidadAActualizar.setClase(habilidadRequest.getClase());
        habilidadAActualizar.setFechaI(habilidadRequest.getFechaI());
        return new ResponseEntity<>(habilidadRepository.save(habilidadAActualizar), HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> borrarHabilidad(@PathVariable("id") Long id){
        habilidadRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
