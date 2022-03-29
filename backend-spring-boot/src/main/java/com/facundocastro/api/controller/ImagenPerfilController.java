package com.facundocastro.api.controller;

import com.facundocastro.api.model.ImagenPerfil;
import com.facundocastro.api.model.ResponseFile;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.service.IImagenPerfilService;
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
@RequestMapping("/api/img/perfil")
public class ImagenPerfilController {
    @Autowired
    private IImagenPerfilService imagenPerfilService;

    @PostMapping("/upload")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> uploadFile(@RequestParam("file") MultipartFile file) {
        String message;
        try {
            imagenPerfilService.store(file);
            message = "Se subio la imagen de perfil correctamente: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
        } catch (Exception e) {
            message = "No se pudo subir el archivo: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }

    @GetMapping("/find")
    public ResponseEntity<ResponseFile> getListFiles() {
        ResponseFile fileImgPerfil = new ResponseFile();
        List<ResponseFile> files = imagenPerfilService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/img/perfil/find/")
                    .path(String.valueOf(dbFile.getNombre()))
                    .toUriString();
            return new ResponseFile(
                    dbFile.getNombre(),
                    fileDownloadUri,
                    dbFile.getTipo(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        String separador = Pattern.quote("/");

        for (ResponseFile file : files) {
            String type = "." + file.getTipo().split(separador)[1];
            if (file.getNombre().equalsIgnoreCase("foto-perfil" + type))
                fileImgPerfil = file;
        }

        return ResponseEntity.status(HttpStatus.OK).body(fileImgPerfil);
    }

    @GetMapping("/find/{nombre}")
    public ResponseEntity<byte[]> getFile(@PathVariable String nombre) {
        String separador = Pattern.quote("/");
        ImagenPerfil imgPerfil = imagenPerfilService.getFile(nombre);
        String type = "." + imgPerfil.getTipo().split(separador)[1];
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imgPerfil.getNombre() + type + "\"")
                .body(imgPerfil.getData());
    }
}
