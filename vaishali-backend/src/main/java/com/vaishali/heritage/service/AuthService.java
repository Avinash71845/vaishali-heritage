package com.vaishali.heritage.service;

import com.vaishali.heritage.dto.request.LoginRequest;
import com.vaishali.heritage.dto.request.RegisterRequest;
import com.vaishali.heritage.dto.response.AuthResponse;
import com.vaishali.heritage.exception.DuplicateResourceException;
import com.vaishali.heritage.exception.InvalidCredentialsException;
import com.vaishali.heritage.model.User;
import com.vaishali.heritage.repository.UserRepository;
import com.vaishali.heritage.security.JwtUtil;
import com.vaishali.heritage.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("An account with this email already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(List.of("USER"))
                .active(true)
                .createdAt(Instant.now())
                .build();

        User saved = userRepository.save(user);
        String token = jwtUtil.generateToken(new UserPrincipal(saved));

        return AuthResponse.builder()
                .token(token)
                .id(saved.getId())
                .name(saved.getName())
                .email(saved.getEmail())
                .roles(saved.getRoles())
                .build();
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        if (!user.isActive()) {
            throw new InvalidCredentialsException("This account has been deactivated");
        }

        String token = jwtUtil.generateToken(new UserPrincipal(user));

        return AuthResponse.builder()
                .token(token)
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .roles(user.getRoles())
                .build();
    }
}
