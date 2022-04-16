package com.facundocastro.api.service;

import com.facundocastro.api.model.Proyecto;

import java.util.List;
import java.util.Optional;

public interface IProyectoService {
    Optional<Proyecto> getProyectoById(Long id);
    List<Proyecto> getAllProyectos();
    void saveProyecto(Proyecto proyecto);
    void deleteProyectoById(Long id);
}
