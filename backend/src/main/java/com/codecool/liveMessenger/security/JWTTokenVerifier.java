package com.codecool.liveMessenger.security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTTokenVerifier {


    private String JWT_SECRET_KEY = "o2AL/Ia8BhDDJqzKHZ02VyJimU3Qg3F5GwCKXfo/i4c=";
    private int JWT_EXPIRATION_IN_MINS = 180;

    public boolean verifyToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(JWT_SECRET_KEY).parseClaimsJws(token);

            if (claims.getBody().getExpiration().before(new Date())) {
                throw new AuthenticationServiceException("JWT Token has expired!");
            }

            return true;

        } catch (Exception e) {
            throw new AuthenticationServiceException("Invalid JWT Token!", e);
        }

    }


}
