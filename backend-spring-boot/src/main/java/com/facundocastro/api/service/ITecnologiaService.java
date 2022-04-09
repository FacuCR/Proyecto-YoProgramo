package com.facundocastro.api.service;

import com.facundocastro.api.model.Tecnologia;

import java.util.List;
import java.util.Optional;

public interface ITecnologiaService {
    Optional<Tecnologia> getTecnologia(String nombreTecnologia);
    List<Tecnologia> getAllTecnologias();
    void saveTecnologia(Tecnologia tecnologia);
    void saveAllTecnologias(List<Tecnologia> tecnologias);
}
