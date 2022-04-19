package com.facundocastro.api.repository;

import com.facundocastro.api.model.ImagenProyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagenProyectoRepository extends JpaRepository<ImagenProyecto, Long> {
    Optional<ImagenProyecto> findByNombre(String nombre);
}
