package com.facundocastro.api.repository;

import com.facundocastro.api.model.CvPersonal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CvPersonalRepository extends JpaRepository<CvPersonal, Long> {
    Optional<CvPersonal> findByNombre(String nombre);
}
