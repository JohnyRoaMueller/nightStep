package com.softwave.clubstep.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.Format;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.domain.entities.UserAuth;

@Service
public class UploadService {

    Logger logger = LoggerFactory.getLogger(UploadService.class);

    private void createDirIfNotExist(String dirPath) {
        if (!new File(dirPath).exists() && !new File(dirPath).isDirectory()) {
            new File(dirPath).mkdirs();
        }
    }
    private void saveFile(MultipartFile image, String path) throws IOException {

        InputStream initialStream  = image.getInputStream(); // open the stream
        byte[] buffer = new byte[initialStream.available()]; // create buffer in RAM, counting bytes out of stream to set the right size
        initialStream.read(buffer);                          // reading the stream and filling the buffer with filedata

        File targetFile = new File(path);

        String contentType = image.getContentType();
        if (!List.of("image/jpeg", "image/png").contains(contentType)) {
            logger.warn("Unsupported file type: {}", contentType);
        }        

        try (OutputStream outStream = new FileOutputStream(targetFile)) {
            outStream.write(buffer);
        }
    }
    

    public void addVenueImages(List<MultipartFile> images, String username, String nameOfVenue) throws IOException {
        for (MultipartFile image : images) {

            logger.info("addVenueImages begins");

            String currentFileName = image.getOriginalFilename();

            if (currentFileName.startsWith("/uploads/host_images")) {continue;}

            String newDirPath = String.format("./uploads/host_images/%s/venues/%s", username, nameOfVenue);            

            String newImagePath = String.format("./uploads/host_images/%s/venues/%s/%s", username, nameOfVenue, currentFileName);

            createDirIfNotExist(newDirPath);
            saveFile(image, newImagePath);
        }
    }
  
    
    public void addEventImages(List<MultipartFile> images, String username, String nameOfVenue, String nameOfEvent) throws IOException {
        for (MultipartFile image : images) {

            logger.info("addVenueImages begins");

            String currentFileName = image.getOriginalFilename();

            if (currentFileName.startsWith("/uploads/host_images")) {continue;}

            String newDirPath = String.format("./uploads/host_images/%s/venues/%s/events/%s", username, nameOfVenue, nameOfEvent);            

            String newImagePath = String.format("./uploads/host_images/%s/venues/%s/events/%s/%s", username, nameOfVenue, nameOfEvent, currentFileName);

            createDirIfNotExist(newDirPath);
            saveFile(image, newImagePath);
        }
    }    


}
