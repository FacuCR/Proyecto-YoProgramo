package com.facundocastro.api.service;

import com.facundocastro.api.model.Habilidad;
import com.facundocastro.api.repository.HabilidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HabilidadService implements IHabilidadService {
    @Autowired
    HabilidadRepository habilidadRepository;

    @Override
    public List<Habilidad> getAllHabilidades() {
        return habilidadRepository.findAll();
    }

    @Override
    public void saveHabilidad(Habilidad habilidad) {
        habilidadRepository.save(habilidad);
    }

    @Override
    public void deleteHabilidad(Long id) {
        habilidadRepository.deleteById(id);
    }

    @Override
    public Optional<Habilidad> getById(Long id) {
        return habilidadRepository.findById(id);
    }
}
