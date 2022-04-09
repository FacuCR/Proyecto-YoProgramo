package com.facundocastro.api.repository;

import com.facundocastro.api.model.RedSocial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RedSocialRepository extends JpaRepository<RedSocial, Long> {
    Optional<RedSocial> findByNombre(String nombre);
}
