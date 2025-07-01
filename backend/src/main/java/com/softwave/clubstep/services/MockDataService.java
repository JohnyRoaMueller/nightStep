package com.softwave.clubstep.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationHostDTO;

@Service
public class MockDataService {
    
    public void mockDataInitializer(List<RegistrationHostDTO> hostDTOs, List<List<MultipartFile>> venueImagesMultiparts, List<List<MultipartFile>> eventImagesMultiparts) {
        
    }

}
