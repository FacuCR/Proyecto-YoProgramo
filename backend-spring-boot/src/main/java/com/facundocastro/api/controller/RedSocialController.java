package com.facundocastro.api.controller;

import com.facundocastro.api.model.RedSocial;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.RedSocialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/redes")
public class RedSocialController {

    @Autowired
    RedSocialRepository redRepo;

    @PostMapping("/guardar")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> saveRedSocial(@RequestBody RedSocial red) {
        String mensaje;
        if (redRepo.findByNombre(red.getNombre()).isPresent())
            mensaje = "La red que intenta agregar ya existe " + red.getNombre();
        else {
            redRepo.save(red);
            mensaje = "Guardado con exito la red de " + red.getNombre();
        }
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(mensaje));
    }

    @GetMapping("/traer/todas")
    public List<RedSocial> findAllRedes() {
        return redRepo.findAll();
    }

    @GetMapping("/traer")
    public Optional<RedSocial> findByNombreDeRed(@RequestParam String red) {
        return redRepo.findByNombre(red);
    }

    @PostMapping("/guardar/todas")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> saveAllRedes(@RequestBody List<RedSocial> redes) {
        redRepo.saveAll(redes);
        return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Guardados con exito"));
    }

}
