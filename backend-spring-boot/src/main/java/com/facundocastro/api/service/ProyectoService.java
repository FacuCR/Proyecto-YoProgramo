package com.facundocastro.api.service;

import com.facundocastro.api.model.Proyecto;
import com.facundocastro.api.repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoService implements IProyectoService {
    @Autowired
    ProyectoRepository proyectoRepository;

    @Override
    public Optional<Proyecto> getProyectoById(Long id) {
        return proyectoRepository.findById(id);
    }

    @Override
    public List<Proyecto> getAllProyectos() {
        return proyectoRepository.findAll();
    }

    @Override
    public void saveProyecto(Proyecto proyecto) {
        proyectoRepository.save(proyecto);
    }

    @Override
    public void deleteProyectoById(Long id) {
        proyectoRepository.deleteById(id);
    }
}
