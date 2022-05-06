package com.facundocastro.api.controller;

import com.facundocastro.api.model.ImagenPerfil;
import com.facundocastro.api.model.ImagenProyecto;
import com.facundocastro.api.model.ResponseFile;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.payload.response.ResponseImgProyecto;
import com.facundocastro.api.service.IImagenProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona/proyecto/imagen")
public class ImagenProyectoController {
    @Autowired
    private IImagenProyectoService imagenProyectoService;

    @PostMapping("/upload")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("idProyecto") Long idProyecto) {
        String message;
        try {
            imagenProyectoService.store(file, idProyecto);
            message = "Se subio la imagen del proyecto correctamente: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
        } catch (Exception e) {
            message = "No se pudo subir el archivo: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }

    @GetMapping("/find/{nombre}")
    public ResponseEntity<byte[]> getFile(@PathVariable String nombre) {
        String separador = Pattern.quote("/");
        ImagenProyecto imagenProyecto = imagenProyectoService.getFile(nombre);
        String type = "." + imagenProyecto.getTipo().split(separador)[1];
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imagenProyecto.getNombre() + type + "\"")
                .body(imagenProyecto.getData());
    }

    @GetMapping("/find/idProyecto/{idProyecto}")
    public ResponseEntity<ResponseImgProyecto> getListFiles(@PathVariable Long idProyecto) {
        List<ResponseImgProyecto> files = imagenProyectoService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/persona/proyecto/imagen/find/")
                    .path(String.valueOf(dbFile.getNombre()))
                    .toUriString();
            return new ResponseImgProyecto(
                    dbFile.getNombre(),
                    fileDownloadUri,
                    dbFile.getTipo(),
                    dbFile.getData().length,
                    dbFile.getProyecto().getId());
        }).collect(Collectors.toList());

        ResponseImgProyecto fileImgProyecto = new ResponseImgProyecto();
        for (ResponseImgProyecto file : files) {
            Long idProyectoFile = file.getIdProyecto();
            if (idProyectoFile == idProyecto)
                fileImgProyecto = file;
        }

        return ResponseEntity.status(HttpStatus.OK).body(fileImgProyecto);
    }
}
