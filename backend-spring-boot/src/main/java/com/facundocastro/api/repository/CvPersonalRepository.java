package com.facundocastro.api.repository;

import com.facundocastro.api.model.CvPersonal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CvPersonalRepository extends JpaRepository<CvPersonal, Long> {
    Optional<CvPersonal> findByNombre(String nombre);
}
