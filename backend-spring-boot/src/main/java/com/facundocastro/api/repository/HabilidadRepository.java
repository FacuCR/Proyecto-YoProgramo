package com.facundocastro.api.repository;

import com.facundocastro.api.model.Habilidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface HabilidadRepository extends JpaRepository<Habilidad, Long> {
    List<Habilidad> findByUsuarioId(Long usuarioId);

    @Transactional
    void deleteByUsuarioId(Long usuarioId);
}
