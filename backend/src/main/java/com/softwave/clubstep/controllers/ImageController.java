package com.softwave.clubstep.controllers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ImageController {

    Logger logger = LoggerFactory.getLogger(ImageController.class);

    @GetMapping("/images/{pseudoImagePath}")
    public ResponseEntity<byte[]> getImage(@PathVariable("pseudoImagePath") String pseudoImagePath) {

        logger.info("/images/{imagePath} reached");

        logger.info("pseudoImagePath: {}", pseudoImagePath);

        String imagePath = pseudoImagePath.replace("-", "/");

        logger.info("imagePath: {}", imagePath);
        

        File imageFile = new File(String.format("C:/vscode-projects/nightstep-project%s", imagePath));

        if (!imageFile.exists()) { return ResponseEntity.notFound().build(); }

        try
        {
            FileInputStream fileInputStream = new FileInputStream(imageFile);
            byte[] imageBytes = new byte[(int) imageFile.length()];
            fileInputStream.read(imageBytes);
            
            return ResponseEntity.ok()
                                .contentType(MediaType.IMAGE_JPEG)
                                .body(imageBytes);
        }
        catch(IOException e) 
        {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }
}
