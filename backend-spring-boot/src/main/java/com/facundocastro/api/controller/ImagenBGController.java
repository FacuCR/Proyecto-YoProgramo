package com.facundocastro.api.controller;

import com.facundocastro.api.model.ImagenBG;
import com.facundocastro.api.model.ResponseFile;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.service.IImagenBGService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/img/bg")
public class ImagenBGController {
    @Autowired
    private IImagenBGService imgBGService;

    @PostMapping("/upload")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            imgBGService.store(file);
            message = "Se subio la imagen correctamente: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(message));
        } catch (Exception e) {
            message = "No se pudo subir el archivo: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(message));
        }
    }

    @GetMapping("/find/all")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = imgBGService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/img/find/")
                    .path(String.valueOf(dbFile.getNombre()))
                    .toUriString();
            return new ResponseFile(
                    dbFile.getNombre(),
                    fileDownloadUri,
                    dbFile.getTipo(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @GetMapping("/find/{nombre}")
    public ResponseEntity<byte[]> getFile(@PathVariable String nombre) {
        ImagenBG imgBg = imgBGService.getFile(nombre);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imgBg.getNombre() + "\"")
                .body(imgBg.getData());
    }
}
