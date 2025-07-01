package com.softwave.clubstep;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.controllers.EventController;
import com.softwave.clubstep.controllers.RegistrationController;
import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.enums.Roles;
import com.softwave.clubstep.services.MockDataService;
import com.softwave.clubstep.services.ServerstartService;

import io.jsonwebtoken.io.IOException;

import com.softwave.clubstep.domain.entities.Event;

import jakarta.persistence.EntityManager;
import jakarta.security.auth.message.config.AuthConfigFactory.RegistrationContext;

import org.springframework.web.multipart.MultipartFile;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class NightstepApplication implements CommandLineRunner {

	@Autowired
    private EntityManager entityManager;

	
	//*			        REPOSITORYS				 */
	private final VenueRepository venueRepository;
	private final GuestRepository guestRepository;
	private final HostRepository hostRepository;
	private final ServerstartService serverstartService;

	//*		        	CONTROLLER	    				 */
	private final RegistrationController registrationController;
    private final EventController eventController;

    //*                  SERVICES                   */
    private final MockDataService mockDataService;


	public NightstepApplication(VenueRepository venueRepository, GuestRepository guestRepository, HostRepository hostRepository, RegistrationController registrationController, EventController eventController, ServerstartService serverstartService, MockDataService mockDataService) {
		this.venueRepository = venueRepository;
		this.guestRepository = guestRepository;
		this.hostRepository = hostRepository;
		this.registrationController = registrationController;
        this.eventController = eventController;
		this.serverstartService = serverstartService;
        this.mockDataService = mockDataService;
	}

    Logger logger = LoggerFactory.getLogger(getClass());


	public static void main(String[] args) {
		
		SpringApplication.run(NightstepApplication.class, args);
		System.out.println("Application started");

	}

class FileMultipartFile implements MultipartFile {

    // had to rewrite the class, because MockMultipartFile is only aviabable in test

    private final File file;
    private final String name;
    private final String originalFilename;
    private final String contentType;

    public FileMultipartFile(File file, String name, String originalFilename, String contentType) {
        this.file = file;
        this.name = name;
        this.originalFilename = originalFilename;
        this.contentType = contentType;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getOriginalFilename() {
        return originalFilename;
    }

    @Override
    public String getContentType() {
        return contentType;
    }

    @Override
    public boolean isEmpty() {
        return file == null || file.length() == 0;
    }

    @Override
    public long getSize() {
        return file.length();
    }

    @Override
    public byte[] getBytes() throws IOException, FileNotFoundException, java.io.IOException {
        try (InputStream in = new FileInputStream(file)) {
            return in.readAllBytes();
        }
    }

    @Override
    public InputStream getInputStream() throws IOException, FileNotFoundException {
        return new FileInputStream(file);
    }

    @Override
    public void transferTo(File dest) throws IOException, IllegalStateException, FileNotFoundException, java.io.IOException {
        try (InputStream in = new FileInputStream(file);
             OutputStream out = new FileOutputStream(dest)) {
            in.transferTo(out);
        }
    }
}    


    public List<MultipartFile> filesToMultipart(List<File> files) {
        List<MultipartFile> multipartFiles = new ArrayList<>();
        for (File file : files) {
            multipartFiles.add(new FileMultipartFile(file, "file", file.getName(), "image/*"));
        }
        return multipartFiles;
    }
	

	@Override
	public void run(String... args) {


        // --- 6 Clubs in Berlin ---
        // 1. Nachtwerk
        RegistrationHostDTO host1 = new RegistrationHostDTO();
        host1.setFirstname("Max");
        host1.setLastname("Mustermann");
        host1.setEmail("max.nachtwerk@example.com");
        host1.setEmailConfirm("max.nachtwerk@example.com");
        host1.setGender("Männlich");
        host1.setBirthday("1985-01-15");
        host1.setUsername("nachtwerk_max");
        host1.setPassword("password");
        host1.setNameOfVenue("Nachtwerk");
        host1.setTypeOfVenue("Nightclub");
        host1.setCapacity("1200");
        host1.setCityOfVenue("Berlin");
        host1.setStreetOfVenue("Hauptstraße");
        host1.setHousenumberOfVenue("5A");
        host1.setPostcodeOfVenue("10115");
        host1.setRole(Roles.HOST);

        List<File> eventImageFilesHost1Event1 = new ArrayList<>();
        eventImageFilesHost1Event1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\events\\diagonal_blue.png"));
        eventImageFilesHost1Event1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\events\\diagonal_green.png"));
        eventImageFilesHost1Event1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\events\\diagonal_red.png"));
        List<MultipartFile> eventImageMultipartsHost1Event1 = filesToMultipart(eventImageFilesHost1Event1);

        Event host1Event1 = new Event(
            "90' Night vol. 3",
            OffsetDateTime.parse("2025-07-04T22:00:00+02:00"),
            OffsetDateTime.parse("2025-07-06T20:00:00+02:00"),
            new BigDecimal("22.00"),
            0,
            "Get ready to dance all night to the best hits from the 90s! Join us for a nostalgic party filled with classic tunes, retro vibes, and unforgettable fun.",
            "0",
            eventController.extractImagePaths(eventImageMultipartsHost1Event1, "nachtwerk_max", "Nachtwerk", "90' Night vol. 3"),
            null
            );


        List<File> venueImageFilesHost1 = new ArrayList<>();
        venueImageFilesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_1.jpg"));
        venueImageFilesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_2.jpg"));
        venueImageFilesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_3.jpg"));
        venueImageFilesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_4.jpg"));
        List<MultipartFile> venueImageMultipartsHost1 = filesToMultipart(venueImageFilesHost1);
        
        



        // 2. Eclipse
        RegistrationHostDTO host2 = new RegistrationHostDTO();
        host2.setFirstname("Anna");
        host2.setLastname("Schmidt");
        host2.setEmail("anna.eclipse@example.com");
        host2.setEmailConfirm("anna.eclipse@example.com");
        host2.setGender("Weiblich");
        host2.setBirthday("1990-04-10");
        host2.setUsername("eclipse_anna");
        host2.setPassword("password");
        host2.setNameOfVenue("Eclipse");
        host2.setTypeOfVenue("Nightclub");
        host2.setCapacity("900");
        host2.setCityOfVenue("Berlin");
        host2.setStreetOfVenue("Unter den Linden");
        host2.setHousenumberOfVenue("12");
        host2.setPostcodeOfVenue("10117");
        host2.setImages(new ArrayList<>());
        host2.setRole(Roles.HOST);

        List<File> venueImageFilesHost2 = new ArrayList<>();
        venueImageFilesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_5.jpg"));
        venueImageFilesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_6.jpg"));
        venueImageFilesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_7.jpg"));
        venueImageFilesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_8.jpg"));
        List<MultipartFile> venueImageMultipartsHost2 = filesToMultipart(venueImageFilesHost2);


        // 3. Urban Pulse
        RegistrationHostDTO host3 = new RegistrationHostDTO();
        host3.setFirstname("Lukas");
        host3.setLastname("Müller");
        host3.setEmail("lukas.urbanpulse@example.com");
        host3.setEmailConfirm("lukas.urbanpulse@example.com");
        host3.setGender("Männlich");
        host3.setBirthday("1988-06-20");
        host3.setUsername("urbanpulse_lukas");
        host3.setPassword("password");
        host3.setNameOfVenue("Urban Pulse");
        host3.setTypeOfVenue("Nightclub");
        host3.setCapacity("700");
        host3.setCityOfVenue("Berlin");
        host3.setStreetOfVenue("Rosenthaler Straße");
        host3.setHousenumberOfVenue("27");
        host3.setPostcodeOfVenue("10178");
        host3.setImages(new ArrayList<>());
        host3.setRole(Roles.HOST);

        List<File> venueImageFilesHost3 = new ArrayList<>();
        venueImageFilesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_9.jpg"));
        venueImageFilesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_10.jpg"));
        venueImageFilesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_11.jpg"));
        venueImageFilesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_12.jpg"));
        List<MultipartFile> venueImageMultipartsHost3 = filesToMultipart(venueImageFilesHost3);


        // 4. Schattentanz
        RegistrationHostDTO host4 = new RegistrationHostDTO();
        host4.setFirstname("Julia");
        host4.setLastname("Fischer");
        host4.setEmail("julia.schattentanz@example.com");
        host4.setEmailConfirm("julia.schattentanz@example.com");
        host4.setGender("Weiblich");
        host4.setBirthday("1992-11-05");
        host4.setUsername("schattentanz_julia");
        host4.setPassword("password");
        host4.setNameOfVenue("Schattentanz");
        host4.setTypeOfVenue("Nightclub");
        host4.setCapacity("800");
        host4.setCityOfVenue("Berlin");
        host4.setStreetOfVenue("Invalidenstraße");
        host4.setHousenumberOfVenue("44");
        host4.setPostcodeOfVenue("10115");
        host4.setImages(new ArrayList<>());
        host4.setRole(Roles.HOST);

        List<File> venueImageFilesHost4 = new ArrayList<>();
        venueImageFilesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_13.jpg"));
        venueImageFilesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_14.jpg"));
        venueImageFilesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_15.jpg"));
        venueImageFilesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_16.jpg"));
        List<MultipartFile> venueImageMultipartsHost4 = filesToMultipart(venueImageFilesHost4);


        // 5. Aurora Club
        RegistrationHostDTO host5 = new RegistrationHostDTO();
        host5.setFirstname("David");
        host5.setLastname("Klein");
        host5.setEmail("david.auroraclub@example.com");
        host5.setEmailConfirm("david.auroraclub@example.com");
        host5.setGender("Männlich");
        host5.setBirthday("1987-09-12");
        host5.setUsername("aurora_david");
        host5.setPassword("password");
        host5.setNameOfVenue("Aurora Club");
        host5.setTypeOfVenue("Nightclub");
        host5.setCapacity("1100");
        host5.setCityOfVenue("Berlin");
        host5.setStreetOfVenue("Potsdamer Straße");
        host5.setHousenumberOfVenue("18");
        host5.setPostcodeOfVenue("10785");
        host5.setImages(new ArrayList<>());
        host5.setRole(Roles.HOST);

        List<File> venueImageFilesHost5 = new ArrayList<>();
        venueImageFilesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_17.jpg"));
        venueImageFilesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_18.jpg"));
        venueImageFilesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_19.jpg"));
        venueImageFilesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_20.jpg"));
        List<MultipartFile> venueImageMultipartsHost5 = filesToMultipart(venueImageFilesHost5);


        // 6. Morgenlicht
        RegistrationHostDTO host6 = new RegistrationHostDTO();
        host6.setFirstname("Sophia");
        host6.setLastname("Meier");
        host6.setEmail("sophia.morgenlicht@example.com");
        host6.setEmailConfirm("sophia.morgenlicht@example.com");
        host6.setGender("Weiblich");
        host6.setBirthday("1995-03-22");
        host6.setUsername("morgenlicht_sophia");
        host6.setPassword("password");
        host6.setNameOfVenue("Morgenlicht");
        host6.setTypeOfVenue("Nightclub");
        host6.setCapacity("600");
        host6.setCityOfVenue("Berlin");
        host6.setStreetOfVenue("Kurfürstendamm");
        host6.setHousenumberOfVenue("101");
        host6.setPostcodeOfVenue("10707");
        host6.setImages(new ArrayList<>());
        host6.setRole(Roles.HOST);

        List<File> venueImageFilesHost6 = new ArrayList<>();
        venueImageFilesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_21.jpg"));
        venueImageFilesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_22.jpg"));
        venueImageFilesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_23.jpg"));
        venueImageFilesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_24.jpg"));
        List<MultipartFile> venueImageMultipartsHost6 = filesToMultipart(venueImageFilesHost6);


        // --- 6 Bars in Berlin ---
        // 7. Velvet Lounge
        RegistrationHostDTO host7 = new RegistrationHostDTO();
        host7.setFirstname("Jan");
        host7.setLastname("Schneider");
        host7.setEmail("jan.velvetlounge@example.com");
        host7.setEmailConfirm("jan.velvetlounge@example.com");
        host7.setGender("Männlich");
        host7.setBirthday("1986-07-18");
        host7.setUsername("velvet_jan");
        host7.setPassword("password");
        host7.setNameOfVenue("Velvet Lounge");
        host7.setTypeOfVenue("Bar");
        host7.setCapacity("150");
        host7.setCityOfVenue("Berlin");
        host7.setStreetOfVenue("Schönhauser Allee");
        host7.setHousenumberOfVenue("30");
        host7.setPostcodeOfVenue("10437");
        host7.setImages(new ArrayList<>());
        host7.setRole(Roles.HOST);

        List<File> venueImageFilesHost7 = new ArrayList<>();
        venueImageFilesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_1.jpg"));
        venueImageFilesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_2.jpg"));
        venueImageFilesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_3.jpg"));
        venueImageFilesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_4.jpg"));
        List<MultipartFile> venueImageMultipartsHost7 = filesToMultipart(venueImageFilesHost7);


        // 8. Goldene Stunde
        RegistrationHostDTO host8 = new RegistrationHostDTO();
        host8.setFirstname("Laura");
        host8.setLastname("Becker");
        host8.setEmail("laura.goldenestunde@example.com");
        host8.setEmailConfirm("laura.goldenestunde@example.com");
        host8.setGender("Weiblich");
        host8.setBirthday("1991-12-03");
        host8.setUsername("goldenestunde_laura");
        host8.setPassword("password");
        host8.setNameOfVenue("Goldene Stunde");
        host8.setTypeOfVenue("Bar");
        host8.setCapacity("250");
        host8.setCityOfVenue("Berlin");
        host8.setStreetOfVenue("Prenzlauer Allee");
        host8.setHousenumberOfVenue("22");
        host8.setPostcodeOfVenue("10405");
        host8.setImages(new ArrayList<>());
        host8.setRole(Roles.HOST);

        List<File> venueImageFilesHost8 = new ArrayList<>();
        venueImageFilesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_5.jpg"));
        venueImageFilesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_6.jpg"));
        venueImageFilesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_7.jpg"));
        venueImageFilesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_8.jpg"));
        List<MultipartFile> venueImageMultipartsHost8 = filesToMultipart(venueImageFilesHost8);


        // 9. Luna Bar
        RegistrationHostDTO host9 = new RegistrationHostDTO();
        host9.setFirstname("Felix");
        host9.setLastname("Richter");
        host9.setEmail("felix.lunabar@example.com");
        host9.setEmailConfirm("felix.lunabar@example.com");
        host9.setGender("Männlich");
        host9.setBirthday("1989-05-25");
        host9.setUsername("lunabar_felix");
        host9.setPassword("password");
        host9.setNameOfVenue("Luna Bar");
        host9.setTypeOfVenue("Bar");
        host9.setCapacity("180");
        host9.setCityOfVenue("Berlin");
        host9.setStreetOfVenue("Frankfurter Allee");
        host9.setHousenumberOfVenue("15");
        host9.setPostcodeOfVenue("10247");
        host9.setImages(new ArrayList<>());
        host9.setRole(Roles.HOST);

        List<File> venueImageFilesHost9 = new ArrayList<>();
        venueImageFilesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_9.jpg"));
        venueImageFilesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_10.jpg"));
        venueImageFilesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_11.jpg"));
        venueImageFilesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_12.jpg"));
        List<MultipartFile> venueImageMultipartsHost9 = filesToMultipart(venueImageFilesHost9);


        // 10. Stadtklang
        RegistrationHostDTO host10 = new RegistrationHostDTO();
        host10.setFirstname("Emma");
        host10.setLastname("Schulz");
        host10.setEmail("emma.stadtklang@example.com");
        host10.setEmailConfirm("emma.stadtklang@example.com");
        host10.setGender("Weiblich");
        host10.setBirthday("1993-08-30");
        host10.setUsername("stadtklang_emma");
        host10.setPassword("password");
        host10.setNameOfVenue("Stadtklang");
        host10.setTypeOfVenue("Bar");
        host10.setCapacity("100");
        host10.setCityOfVenue("Berlin");
        host10.setStreetOfVenue("Schlüterstraße");
        host10.setHousenumberOfVenue("9");
        host10.setPostcodeOfVenue("10707");
        host10.setImages(new ArrayList<>());
        host10.setRole(Roles.HOST);

        List<File> venueImageFilesHost10 = new ArrayList<>();
        venueImageFilesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_13.jpg"));
        venueImageFilesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_14.jpg"));
        venueImageFilesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_15.jpg"));
        venueImageFilesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_16.jpg"));
        List<MultipartFile> venueImageMultipartsHost10 = filesToMultipart(venueImageFilesHost10);


        // 11. Eckstein
        RegistrationHostDTO host11 = new RegistrationHostDTO();
        host11.setFirstname("Paul");
        host11.setLastname("Hoffmann");
        host11.setEmail("paul.eckstein@example.com");
        host11.setEmailConfirm("paul.eckstein@example.com");
        host11.setGender("Männlich");
        host11.setBirthday("1984-02-14");
        host11.setUsername("eckstein_paul");
        host11.setPassword("password");
        host11.setNameOfVenue("Eckstein");
        host11.setTypeOfVenue("Bar");
        host11.setCapacity("80");
        host11.setCityOfVenue("Berlin");
        host11.setStreetOfVenue("Müllerstraße");
        host11.setHousenumberOfVenue("3");
        host11.setPostcodeOfVenue("13353");
        host11.setImages(new ArrayList<>());
        host11.setRole(Roles.HOST);

        List<File> venueImageFilesHost11 = new ArrayList<>();
        venueImageFilesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_17.jpg"));
        venueImageFilesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_18.jpg"));
        venueImageFilesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_19.jpg"));
        venueImageFilesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_20.jpg"));
        List<MultipartFile> venueImageMultipartsHost11 = filesToMultipart(venueImageFilesHost11);


        // 12. Kiezhaus
        RegistrationHostDTO host12 = new RegistrationHostDTO();
        host12.setFirstname("Mia");
        host12.setLastname("Wagner");
        host12.setEmail("mia.kiezhaus@example.com");
        host12.setEmailConfirm("mia.kiezhaus@example.com");
        host12.setGender("Weiblich");
        host12.setBirthday("1994-10-07");
        host12.setUsername("kiezhaus_mia");
        host12.setPassword("password");
        host12.setNameOfVenue("Kiezhaus");
        host12.setTypeOfVenue("Bar");
        host12.setCapacity("90");
        host12.setCityOfVenue("Berlin");
        host12.setStreetOfVenue("Warschauer Straße");
        host12.setHousenumberOfVenue("55");
        host12.setPostcodeOfVenue("10243");
        host12.setImages(new ArrayList<>());
        host12.setRole(Roles.HOST);

        List<File> venueImageFilesHost12 = new ArrayList<>();
        venueImageFilesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_21.jpg"));
        venueImageFilesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_22.jpg"));
        venueImageFilesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_23.jpg"));
        venueImageFilesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_24.jpg"));
        List<MultipartFile> venueImageMultipartsHost12 = filesToMultipart(venueImageFilesHost12);


        List<RegistrationHostDTO> hostDTOs = new ArrayList<>(List.of(host1, host2, host3, host4, host5, host6, host7, host8, host9, host10, host11, host12));
        List<List<MultipartFile>> venueImagesMultiparts = new ArrayList<>(List.of(venueImageMultipartsHost1, venueImageMultipartsHost2, venueImageMultipartsHost3, venueImageMultipartsHost4, venueImageMultipartsHost5, venueImageMultipartsHost6, venueImageMultipartsHost7, venueImageMultipartsHost8, venueImageMultipartsHost9, venueImageMultipartsHost10, venueImageMultipartsHost11, venueImageMultipartsHost12));
        List<List<MultipartFile>> eventImagesMultiparts = new ArrayList<>(List.of(venueImageMultipartsHost1));
        
        mockDataService.mockDataInitializer(hostDTOs, venueImagesMultiparts, eventImagesMultiparts);

		// serverstartService.createHostUserByServerstart(host1, imagesHost1, new ArrayList<>(List.of(host1Event1)));

        

	}
}