package com.softwave.clubstep.DTO.wrapper;

import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;

public class RegistrationWrapper {

    RegistrationHostDTO registrationHostDTO;
    VenueDTO venueDTO;

    public RegistrationWrapper() {};
    public RegistrationWrapper
    (
        RegistrationHostDTO registrationHostDTO,
        VenueDTO venueDTO
    )
    {
        this.registrationHostDTO = registrationHostDTO;
        this.venueDTO = venueDTO;
    }

    public RegistrationHostDTO getRegistrationHostDTO() { return registrationHostDTO; }
    public void setRegistrationHostDTO(RegistrationHostDTO registrationHostDTO) { this.registrationHostDTO = registrationHostDTO; }

    public VenueDTO venueDTO() { return venueDTO; }
    public void setVenueDTO(VenueDTO venueDTO) { this.venueDTO = venueDTO; }    
    
}
