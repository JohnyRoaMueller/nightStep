package com.softwave.clubstep.controllers;

import java.io.File;
import java.util.Map;

import org.aspectj.internal.lang.annotation.ajcPrivileged;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ImageController {

    Logger logger = LoggerFactory.getLogger(ImageController.class);

    @PostMapping("/images/")
    public ResponseEntity<File> getImage(@RequestBody Map<String, String> request) {

        logger.info("bildpfad empfangen: " + request.get("imageAddress"));

        File image = new File(request.get("imageAddress"));

        if (image.isFile()) {
            logger.info("file geladen");
        } else {
            logger.info("file nicht geladen");
        }

        return ResponseEntity.ok().body(image);
    }
}
