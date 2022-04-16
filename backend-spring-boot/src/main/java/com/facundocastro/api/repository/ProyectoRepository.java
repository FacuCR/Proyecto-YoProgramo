package com.facundocastro.api.repository;

import com.facundocastro.api.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Long> {
    List<Proyecto> findByUsuarioId(Long UsuarioId);

    @Transactional
    void deleteByUsuarioId(Long UsuarioId);
}
