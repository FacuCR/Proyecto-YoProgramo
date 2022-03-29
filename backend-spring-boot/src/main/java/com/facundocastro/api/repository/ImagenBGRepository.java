package com.facundocastro.api.repository;

import com.facundocastro.api.model.ImagenBG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagenBGRepository extends JpaRepository<ImagenBG, Long> {
    Optional<ImagenBG> findByNombre(String nombre);
}
