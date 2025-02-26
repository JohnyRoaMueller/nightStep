package com.softwave.clubstep.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class CookieService {
    Logger logger = LoggerFactory.getLogger(getClass());
    
        public Cookie createJwtAuthCookie(String token) {

            Cookie cookie = new Cookie("jwt", token);
            cookie.setHttpOnly(true); // no access for JavaScript with document.cookie
            cookie.setSecure(false); // true if i want it to send only with https // dev enviroment is http
            cookie.setPath("/"); // cookie is valid on every path
            cookie.setMaxAge(60 * 60 * 24);

            logger.info("cookie generiert");
            return cookie;
        }

        public Cookie deleteJwtAuthCookie(HttpServletRequest request) {
            String token = request.getHeader(HttpHeaders.COOKIE).substring(4);
            {/* to delete cookie, the signature have to be exact the same. just expire it. */}
            Cookie cookie = new Cookie("jwt", token);
            cookie.setHttpOnly(true); // no access for JavaScript with document.cookie
            cookie.setSecure(false); // true if i want it to send only with https // dev enviroment is http
            cookie.setPath("/"); // cookie is valid on every path
            cookie.setMaxAge(0); // set as expired

            logger.info("cookie gelöscht");
            return cookie;
        }
}
