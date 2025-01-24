package com.softwave.clubstep.security.authentication;

import java.security.Key;
import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 
 * 
 * The JwtProvider is responsible for generating and validating JWT 
 * (JSON WEB TOKENS) for authentication purpose.
 * 
 * A jwt represented as a JSON-Object:
 * 
 * {
 *   "header": {
 *     "alg": "HS256",
 *     "typ": "JWT"
 *   },
 *   "payload": {
 *     "sub": "1234567890",
 *     "name": "John Doe",
 *     "iat": 1516239022,
 *     "exp": 1516239022
 *   },
 *   "signature": "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * }
 * 
 * a jwt repesented as a String:
 * 
 * <header>.<payload>.<signature>
 * 
 * 
*/




@Component
public class JwtProvider {

    public JwtProvider() {};



    //* Constants are capitalized - not a Enumaration */
    static final Key KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    
    static final long EXPIRATIONTIME = 86400000;

    static final String PREFIX = "Bearer";






    public String getToken(String username) {
        String token = Jwts.builder()
                        .setSubject(username)
                        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                        .signWith(KEY)
                        .compact();
                        return token;
    }
    // result for username = "username":
    // <header>.<payload>.<signature>
    // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTczNzgwMjQ0NX0.AT0xA48RmXSdTLFMx0wa4bJLU038R9-Xcbv16N6E2eE


    public String getAuthUser(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (token != null) {
            String user = Jwts.parserBuilder()
                .setSigningKey(KEY)
                .build()
                .parseClaimsJws(token.replace(PREFIX, ""))
                .getBody()
                .getSubject();

                if (user != null)
                    return user;
        }
        return null;
    }
}

/**
 * 
 * Here you see a http Protocol
 * 
GET /api/protected-resource HTTP/1.1
Host: www.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.S8DKG9gV6gV7d8B3N-YQ4DxbbGj0Zb6-yS7a4UfrbdY
Accept: application/json
Connection: keep-alive
 *
 * GET /api/protected-resource HTTP/1.1       ||| is the request-Line
 * 
 * Host - Authorization - Accept - Connection ||| are Http Headers
 * 
 * 
 * -> the Authorization header contains a json web token
 * 
 * -> the headers are not absolutely necessary, but the request line is
 */