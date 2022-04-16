package com.facundocastro.api.controller;

import com.facundocastro.api.model.Proyecto;
import com.facundocastro.api.payload.request.ProyectoRequest;
import com.facundocastro.api.repository.ProyectoRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.service.IProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona/proyecto")
public class ProyectoController {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    IProyectoService proyectoService;
    @Autowired
    ProyectoRepository proyectoRepository;

    @PostMapping("/crear")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Proyecto> saveProyecto(@RequestBody ProyectoRequest proyectoRequest){
        Proyecto proyectoNuevo = new Proyecto();
        proyectoNuevo.setTitulo(proyectoRequest.getTitulo());
        proyectoNuevo.setDescripcion(proyectoRequest.getDescripcion());
        proyectoNuevo.setUrl(proyectoRequest.getUrl());

        Proyecto proyectoGuardado = usuarioRepository.findById(2L).map(usuario -> {
            proyectoNuevo.setUsuario(usuario);
            return proyectoRepository.save(proyectoNuevo);
        }).orElseThrow();

        return new ResponseEntity<>(proyectoGuardado, HttpStatus.CREATED);
    }

    @GetMapping("/traer/todas")
    public ResponseEntity<List<Proyecto>> getAllProyectos(){
        List<Proyecto> proyectos = proyectoService.getAllProyectos();
        return new ResponseEntity<>(proyectos, HttpStatus.OK);
    }

    @PutMapping("/actualizar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Proyecto> updateHabilidad(@PathVariable Long id, @RequestBody ProyectoRequest proyectoRequest){
        Proyecto proyectoAActualizar = proyectoService.getProyectoById(id).orElseThrow();

        proyectoAActualizar.setTitulo(proyectoRequest.getTitulo());
        proyectoAActualizar.setDescripcion(proyectoRequest.getDescripcion());
        proyectoAActualizar.setUrl(proyectoRequest.getUrl());

        return new ResponseEntity<>(proyectoRepository.save(proyectoAActualizar), HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> borrarHabilidad(@PathVariable("id") Long id){
        proyectoService.deleteProyectoById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
