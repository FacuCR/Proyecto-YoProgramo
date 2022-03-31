package com.facundocastro.api.controller;

import com.facundocastro.api.model.ERole;
import com.facundocastro.api.model.Persona;
import com.facundocastro.api.model.Role;
import com.facundocastro.api.model.Usuario;
import com.facundocastro.api.payload.request.LoginRequest;
import com.facundocastro.api.payload.request.SignUpRequest;
import com.facundocastro.api.payload.response.JwtResponse;
import com.facundocastro.api.payload.response.MessageResponse;
import com.facundocastro.api.repository.RoleRepository;
import com.facundocastro.api.repository.UsuarioRepository;
import com.facundocastro.api.security.jwt.JwtUtils;
import com.facundocastro.api.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getContrasenia()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        //roleRepository.save(new Role(ERole.ROLE_ADMIN));
        Optional<Usuario> usuarioARevisar = usuarioRepository.findByEmail(signUpRequest.getEmail());
        if (usuarioARevisar.isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Este email ya esta en uso!"));
        }
        // Create new user's account
        Usuario user = new Usuario();
        user.setEmail(signUpRequest.getEmail());
        user.setContrasenia(encoder.encode(signUpRequest.getContrasenia()));
        String role = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
        if (!role.isEmpty()) {
            if ("admin".equals(role)) {
                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                        .orElseThrow(() -> new RuntimeException("Error: Role no encontrado."));
                roles.add(adminRole);
            }
        }
        user.setId(2L);
        user.setRoles(roles);
        user.setPersona(new Persona());
        usuarioRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
