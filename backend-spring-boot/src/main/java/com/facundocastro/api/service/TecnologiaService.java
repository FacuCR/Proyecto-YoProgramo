package com.facundocastro.api.service;

import com.facundocastro.api.model.Tecnologia;
import com.facundocastro.api.repository.TecnologiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TecnologiaService implements ITecnologiaService {
    @Autowired
    TecnologiaRepository tecnologiaRepository;

    @Override
    public Optional<Tecnologia> getTecnologia(String nombreTecnologia) {
        return tecnologiaRepository.findByNombre(nombreTecnologia);
    }

    @Override
    public List<Tecnologia> getAllTecnologias() {
        return tecnologiaRepository.findAll();
    }

    @Override
    public void saveTecnologia(Tecnologia tecnologia) {
        tecnologiaRepository.save(tecnologia);
    }

    @Override
    public void saveAllTecnologias(List<Tecnologia> tecnologias) {
        tecnologiaRepository.saveAll(tecnologias);
    }
}
