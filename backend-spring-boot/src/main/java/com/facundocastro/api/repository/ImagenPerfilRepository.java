package com.facundocastro.api.repository;

import com.facundocastro.api.model.ImagenPerfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagenPerfilRepository extends JpaRepository<ImagenPerfil, Long> {
    Optional<ImagenPerfil> findByNombre(String nombre);
}
