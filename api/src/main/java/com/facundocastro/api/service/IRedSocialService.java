package com.facundocastro.api.service;

import com.facundocastro.api.model.RedSocial;

import java.util.List;
import java.util.Optional;

public interface IRedSocialService {
    Optional<RedSocial> getRedSoc(String nombreRed);
    List<RedSocial> getAllRedSoc();
    void saveRed(RedSocial red);
    void saveAllRedes(List<RedSocial> redes);
}
