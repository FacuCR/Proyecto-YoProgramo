package com.facundocastro.api.repository;

import com.facundocastro.api.model.Habilidad;
import com.facundocastro.api.model.Tecnologia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long> {
    Optional<Tecnologia> findByNombre(String nombre);
}
