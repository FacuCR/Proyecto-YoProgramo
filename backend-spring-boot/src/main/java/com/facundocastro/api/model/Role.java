package com.facundocastro.api.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Role {
    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private ERole name;

    public Role(ERole name) {
        this.name = name;
    }

    public Role() {

    }
}
