package com.facundocastro.api.service;

import com.facundocastro.api.model.RedSocial;
import com.facundocastro.api.repository.RedSocialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RedSocialService implements IRedSocialService {

    @Autowired
    RedSocialRepository redRepo;


    @Override
    public Optional<RedSocial> getRedSoc(String nombreRed) {
        return redRepo.findByNombre(nombreRed);
    }

    @Override
    public List<RedSocial> getAllRedSoc() {
        return redRepo.findAll();
    }

    @Override
    public void saveRed(RedSocial red) {
        redRepo.save(red);
    }

    @Override
    public void saveAllRedes(List<RedSocial> redes) {
        redRepo.saveAll(redes);
    }
}
