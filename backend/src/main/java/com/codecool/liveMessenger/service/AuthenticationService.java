package com.codecool.liveMessenger.service;

import com.codecool.liveMessenger.model.ChatUser;
import com.codecool.liveMessenger.model.Role;
import com.codecool.liveMessenger.model.Token;
import com.codecool.liveMessenger.model.TokenType;
import com.codecool.liveMessenger.model.repositories.TokenRepository;
import com.codecool.liveMessenger.model.repositories.UserRepository;
import com.codecool.liveMessenger.security.request.AuthenticationRequest;
import com.codecool.liveMessenger.security.request.RegisterRequest;
import com.codecool.liveMessenger.security.response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request){
        var user = ChatUser.builder()
                .chatUserName(request.getChatUsername())
                .email(request.getChatUserEmail())
                .password(passwordEncoder.encode(request.getChatUserPassword()))
                .role(Role.USER)
                .build();
        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private void saveUserToken(ChatUser savedUser, String jwtToken) {
        var token = Token.builder()
                .user(savedUser)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user = userRepository.findUserByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("Authenticate method failed, no such user"));
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user,jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }

    private void revokeAllUserTokens(ChatUser user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if(validUserTokens.isEmpty()) return;
        validUserTokens.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
}
