package com.facundocastro.api.service;

import com.facundocastro.api.model.Habilidad;

import java.util.List;
import java.util.Optional;

public interface IHabilidadService {
    List<Habilidad> getAllHabilidades();
    void saveHabilidad(Habilidad habilidad);
    void deleteHabilidad(Long id);
    Optional<Habilidad> getById(Long id);
}
