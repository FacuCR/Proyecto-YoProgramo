package com.facundocastro.api.repository;

import com.facundocastro.api.model.Redes;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface RedesPersonaRepository extends JpaRepository<Redes, Long> {
    List<Redes> findByUsuarioId(Long usuarioId);

    @Transactional
    void deleteByUsuarioId(Long usuarioId);
}
