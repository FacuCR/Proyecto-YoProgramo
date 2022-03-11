package com.facundocastro.api.controller;

import com.facundocastro.api.model.FileInfo;
import com.facundocastro.api.model.Imagenes;
import com.facundocastro.api.model.Persona;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.payload.request.EditarHeroRequest;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.service.IImgStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/persona")
public class PersonaController {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    IImgStorageService storageService;

    @GetMapping("/obtener")
    public Optional<Usuario> obtenerDatosDelUsuario()
    {
        return usuarioRepository.findById(2L);
    }

    @PutMapping("/editar/hero")
    @PreAuthorize("hasRole('ADMIN')")
    public void editarNombreYApellido(@Valid @RequestBody EditarHeroRequest editarHeroRequest) {
        Usuario usuario = usuarioRepository.findById(2L).get();
        Persona persona = usuario.getPersona();

        persona.setNombre(editarHeroRequest.getNombre());
        persona.setApellido(editarHeroRequest.getApellido());
        persona.setOcupacion(editarHeroRequest.getOcupacion());
        usuario.setPersona(persona);

        usuarioRepository.save(usuario);
    }

    @PostMapping("upload/bg")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> editarBG(@RequestParam MultipartFile file) {
        String mensaje;
        Usuario usuario = usuarioRepository.findById(2L).get();
        Persona persona = usuario.getPersona();
        Imagenes fotos = new Imagenes();
        try {
            fotos.setPerfil(persona.getFotos().getPerfil());
            int index = Objects.requireNonNull(file.getOriginalFilename()).lastIndexOf('.');
            String extension = file.getOriginalFilename().substring(index + 1);
            fotos.setBg("hero-bg." + extension);
            storageService.save(file);
            persona.setFotos(fotos);
            usuario.setPersona(persona);
            usuarioRepository.save(usuario);
            mensaje = "El archivo se actualizo exitosamente: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse(mensaje));
        } catch(Exception e) {
            mensaje = "No se pudo actualizar el archivo: " + file.getOriginalFilename() + '!';
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new MessageResponse(mensaje));
        }
    }

    @GetMapping("/files/bg")
    public ResponseEntity<FileInfo> getListFiles() {
        FileInfo fileBg = null;
        String bgActual = usuarioRepository.findById(2L).get().getPersona().getFotos().getBg();
        List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
            String filename = path.getFileName().toString();
            String url = MvcUriComponentsBuilder
                    .fromMethodName(PersonaController.class, "getFile", path.getFileName().toString()).build().toString();
            return new FileInfo(filename, url);
        }).collect(Collectors.toList());

        for (FileInfo file : fileInfos) {
            if (file.getName().equalsIgnoreCase(bgActual))
                fileBg = file;
        }

        return ResponseEntity.status(HttpStatus.OK).body(fileBg);
    }
    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = storageService.load(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}
