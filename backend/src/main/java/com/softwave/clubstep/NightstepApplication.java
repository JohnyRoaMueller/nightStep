package com.softwave.clubstep;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.core.annotation.Order;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.EventDTO;
import com.softwave.clubstep.DTO.RegistrationHostDTO;
import com.softwave.clubstep.DTO.VenueDTO;
import com.softwave.clubstep.controllers.EventController;
import com.softwave.clubstep.controllers.RegistrationController;
import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.enums.Roles;
import com.softwave.clubstep.services.MockDataService;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@EnableMongoRepositories(basePackages = {"com.softwave.clubstep.domain.repository"}) // need this because spring default expect JPA repositories
public class NightstepApplication implements CommandLineRunner {

    @Value("${base.mockimages.path}")
    private String baseMockimagesPath;

    Logger logger = LoggerFactory.getLogger(getClass());
	
	//*			        REPOSITORYS				 */
	private final VenueRepository venueRepository;
	private final GuestRepository guestRepository;
	private final HostRepository hostRepository;

	//*		        	CONTROLLER	    				 */
	private final RegistrationController registrationController;
    private final EventController eventController;

    //*                  SERVICES                   */
    private final MockDataService mockDataService;

    //*                  REDIS                   */
    private final RedisTemplate redisTemplate;

	public NightstepApplication(VenueRepository venueRepository, GuestRepository guestRepository, HostRepository hostRepository, RegistrationController registrationController, EventController eventController, MockDataService mockDataService, RedisTemplate redisTemplate) {
		this.venueRepository = venueRepository;
		this.guestRepository = guestRepository;
		this.hostRepository = hostRepository;
		this.registrationController = registrationController;
        this.eventController = eventController;
        this.mockDataService = mockDataService;
        this.redisTemplate = redisTemplate;
	}

@Component
@Order(1) // Optional: bestimmt die Ausführungsreihenfolge
public class DatabaseDropper implements CommandLineRunner {

    private final MongoTemplate mongoTemplate;

    public DatabaseDropper(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public void dropDatabase() {
        mongoTemplate.dropCollection("hosts");
        mongoTemplate.dropCollection("venues");
        mongoTemplate.dropCollection("events");
        mongoTemplate.dropCollection("guests");
        mongoTemplate.dropCollection("userAuths");
        System.out.println("Collections dropped.");
    }

    @Override
    public void run(String... args) {
        dropDatabase();
        redisTemplate.getConnectionFactory().getConnection().serverCommands().flushAll();
    }
}


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
	public void run(String... args) throws java.io.IOException {


        // --- 6 Clubs in Berlin ---
        // === Host 1: Nachtwerk ===
        RegistrationHostDTO host1 = new RegistrationHostDTO();
        host1.setFirstname("Max");
        host1.setLastname("Mustermann");
        host1.setEmail("max.nachtwerk@example.com");
        host1.setEmailConfirm("max.nachtwerk@example.com");
        host1.setGender("Männlich");
        host1.setBirthday("1985-01-15");
        host1.setUsername("nachtwerk_max");
        host1.setPassword("password");
        host1.setRole(Roles.HOST);


        List<File> venueImageFiles1 = List.of(
            new File(String.format("%s/HostUser1/club_image_1.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser1/club_image_2.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser1/club_image_3.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser1/club_image_4.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages1 = filesToMultipart(venueImageFiles1);

        VenueDTO venue1 = new VenueDTO();
        venue1.setName("Nachtwerk");
        venue1.setType("Nightclub");
        venue1.setCapacity(1200);
        venue1.setCity("Berlin");
        venue1.setDistrict(null);
        venue1.setStreet("Hauptstraße");
        venue1.setHouseNumber("5A");
        venue1.setPostalCode(10115);
        venue1.setDescription(null);
        venue1.setImageBlobs(venueImages1);


        List<File> eventFiles1 = List.of(
            new File(String.format("%s/HostUser1/events/90' Night vol. 3/diagonal_blue.png", baseMockimagesPath)),
            new File(String.format("%s/HostUser1/events/90' Night vol. 3/diagonal_green.png", baseMockimagesPath)),
            new File(String.format("%s/HostUser1/events/90' Night vol. 3/diagonal_red.png", baseMockimagesPath))
        );
        List<MultipartFile> eventImages1 = filesToMultipart(eventFiles1);

        EventDTO event1 = new EventDTO(
            "90' Night vol. 3",
            OffsetDateTime.parse("2025-07-04T22:00:00+02:00"),
            OffsetDateTime.parse("2025-07-06T20:00:00+02:00"),
            new BigDecimal("22.00"),
            0,
            "Get ready to dance all night to the best hits from the 90s! Join us for a nostalgic party filled with classic tunes, retro vibes, and unforgettable fun.",
            null,
            eventImages1
        );



        // === Host 2: Eclipse ===
        RegistrationHostDTO host2 = new RegistrationHostDTO();
        host2.setFirstname("Anna");
        host2.setLastname("Schmidt");
        host2.setEmail("anna.eclipse@example.com");
        host2.setEmailConfirm("anna.eclipse@example.com");
        host2.setGender("Weiblich");
        host2.setBirthday("1990-04-10");
        host2.setUsername("eclipse_anna");
        host2.setPassword("password");
        host2.setRole(Roles.HOST);


        List<File> venueImageFiles2 = List.of(
            new File(String.format("%s/HostUser2/club_image_5.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser2/club_image_6.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser2/club_image_7.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser2/club_image_8.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages2 = filesToMultipart(venueImageFiles2);

        VenueDTO venue2 = new VenueDTO();
        venue2.setName("Eclipse");
        venue2.setType("Nightclub");
        venue2.setCapacity(900);
        venue2.setCity("Berlin");
        venue2.setDistrict(null);
        venue2.setStreet("Unter den Linden");
        venue2.setHouseNumber("12");
        venue2.setPostalCode(10117);
        venue2.setDescription(null);
        venue2.setImageBlobs(venueImages2);



        // === Host 3: Urban Pulse ===
        RegistrationHostDTO host3 = new RegistrationHostDTO();
        host3.setFirstname("Lukas");
        host3.setLastname("Müller");
        host3.setEmail("lukas.urbanpulse@example.com");
        host3.setEmailConfirm("lukas.urbanpulse@example.com");
        host3.setGender("Männlich");
        host3.setBirthday("1988-06-20");
        host3.setUsername("urbanpulse_lukas");
        host3.setPassword("password");
        host3.setRole(Roles.HOST);


        List<File> venueImageFiles3 = List.of(
            new File(String.format("%s/HostUser3/club_image_9.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser3/club_image_10.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser3/club_image_11.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser3/club_image_12.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages3 = filesToMultipart(venueImageFiles3);

        VenueDTO venue3 = new VenueDTO();
        venue3.setName("Urban Pulse");
        venue3.setType("Nightclub");
        venue3.setCapacity(700);
        venue3.setCity("Berlin");
        venue3.setDistrict(null);
        venue3.setStreet("Rosenthaler Straße");
        venue3.setHouseNumber("27");
        venue3.setPostalCode(10178);
        venue3.setDescription(null);
        venue3.setImageBlobs(venueImages3);



        // === Host 4: Schattentanz ===
        RegistrationHostDTO host4 = new RegistrationHostDTO();
        host4.setFirstname("Julia");
        host4.setLastname("Fischer");
        host4.setEmail("julia.schattentanz@example.com");
        host4.setEmailConfirm("julia.schattentanz@example.com");
        host4.setGender("Weiblich");
        host4.setBirthday("1992-11-05");
        host4.setUsername("schattentanz_julia");
        host4.setPassword("password");
        host4.setRole(Roles.HOST);


        List<File> venueImageFiles4 = List.of(
            new File(String.format("%s/HostUser4/club_image_13.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser4/club_image_14.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser4/club_image_15.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser4/club_image_16.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages4 = filesToMultipart(venueImageFiles4);

        VenueDTO venue4 = new VenueDTO();
        venue4.setName("Schattentanz");
        venue4.setType("Nightclub");
        venue4.setCapacity(800);
        venue4.setCity("Berlin");
        venue4.setDistrict(null);
        venue4.setStreet("Invalidenstraße");
        venue4.setHouseNumber("44");
        venue4.setPostalCode(10115);
        venue4.setDescription(null);
        venue4.setImageBlobs(venueImages4);



        // === Host 5: Aurora Club ===
        RegistrationHostDTO host5 = new RegistrationHostDTO();
        host5.setFirstname("David");
        host5.setLastname("Klein");
        host5.setEmail("david.auroraclub@example.com");
        host5.setEmailConfirm("david.auroraclub@example.com");
        host5.setGender("Männlich");
        host5.setBirthday("1987-09-12");
        host5.setUsername("aurora_david");
        host5.setPassword("password");
        host5.setRole(Roles.HOST);


        List<File> venueImageFiles5 = List.of(
            new File(String.format("%s/HostUser5/club_image_17.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser5/club_image_18.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser5/club_image_19.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser5/club_image_20.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages5 = filesToMultipart(venueImageFiles5);

        VenueDTO venue5 = new VenueDTO();
        venue5.setName("Aurora Club");
        venue5.setType("Nightclub");
        venue5.setCapacity(1100);
        venue5.setCity("Berlin");
        venue5.setDistrict(null);
        venue5.setStreet("Potsdamer Straße");
        venue5.setHouseNumber("18");
        venue5.setPostalCode(10785);
        venue5.setDescription(null);
        venue5.setImageBlobs(venueImages5);



        // === Host 6: Morgenlicht ===
        RegistrationHostDTO host6 = new RegistrationHostDTO();
        host6.setFirstname("Sophia");
        host6.setLastname("Meier");
        host6.setEmail("sophia.morgenlicht@example.com");
        host6.setEmailConfirm("sophia.morgenlicht@example.com");
        host6.setGender("Weiblich");
        host6.setBirthday("1995-03-22");
        host6.setUsername("morgenlicht_sophia");
        host6.setPassword("password");
        host6.setRole(Roles.HOST);


        List<File> venueImageFiles6 = List.of(
            new File(String.format("%s/HostUser6/club_image_21.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser6/club_image_22.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser6/club_image_23.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser6/club_image_24.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages6 = filesToMultipart(venueImageFiles6); 

        VenueDTO venue6 = new VenueDTO();
        venue6.setName("Morgenlicht");
        venue6.setType("Nightclub");
        venue6.setCapacity(600);
        venue6.setCity("Berlin");
        venue6.setDistrict(null);
        venue6.setStreet("Kurfürstendamm");
        venue6.setHouseNumber("101");
        venue6.setPostalCode(10707);
        venue6.setDescription(null);
        venue6.setImageBlobs(venueImages6);



        // === Host 7: Velvet Lounge ===
        RegistrationHostDTO host7 = new RegistrationHostDTO();
        host7.setFirstname("Jan");
        host7.setLastname("Schneider");
        host7.setEmail("jan.velvetlounge@example.com");
        host7.setEmailConfirm("jan.velvetlounge@example.com");
        host7.setGender("Männlich");
        host7.setBirthday("1986-07-18");
        host7.setUsername("velvet_jan");
        host7.setPassword("password");
        host7.setRole(Roles.HOST);


        List<File> venueImageFiles7 = List.of(
            new File(String.format("%s/HostUser7/bar_image_1.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser7/bar_image_2.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser7/bar_image_3.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser7/bar_image_4.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages7 = filesToMultipart(venueImageFiles7);

        VenueDTO venue7 = new VenueDTO();
        venue7.setName("Velvet Lounge");
        venue7.setType("Bar");
        venue7.setCapacity(150);
        venue7.setCity("Berlin");
        venue7.setDistrict(null);
        venue7.setStreet("Schönhauser Allee");
        venue7.setHouseNumber("30");
        venue7.setPostalCode(10437);
        venue7.setDescription(null);
        venue7.setImageBlobs(venueImages7);



        // === Host 8: Goldene Stunde ===
        RegistrationHostDTO host8 = new RegistrationHostDTO();
        host8.setFirstname("Laura");
        host8.setLastname("Becker");
        host8.setEmail("laura.goldenestunde@example.com");
        host8.setEmailConfirm("laura.goldenestunde@example.com");
        host8.setGender("Weiblich");
        host8.setBirthday("1991-12-03");
        host8.setUsername("goldenestunde_laura");
        host8.setPassword("password");
        host8.setRole(Roles.HOST);


        List<File> venueImageFiles8 = List.of(
            new File(String.format("%s/HostUser8/bar_image_5.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser8/bar_image_6.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser8/bar_image_7.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser8/bar_image_8.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages8 = filesToMultipart(venueImageFiles8);

        VenueDTO venue8 = new VenueDTO();
        venue8.setName("Goldene Stunde");
        venue8.setType("Bar");
        venue8.setCapacity(250);
        venue8.setCity("Berlin");
        venue8.setDistrict(null);
        venue8.setStreet("Prenzlauer Allee");
        venue8.setHouseNumber("22");
        venue8.setPostalCode(10405);
        venue8.setDescription(null);
        venue8.setImageBlobs(venueImages8);



        // === Host 9: Luna Bar ===
        RegistrationHostDTO host9 = new RegistrationHostDTO();
        host9.setFirstname("Felix");
        host9.setLastname("Richter");
        host9.setEmail("felix.lunabar@example.com");
        host9.setEmailConfirm("felix.lunabar@example.com");
        host9.setGender("Männlich");
        host9.setBirthday("1989-05-25");
        host9.setUsername("lunabar_felix");
        host9.setPassword("password");
        host9.setRole(Roles.HOST);


        List<File> venueImageFiles9 = List.of(
            new File(String.format("%s/HostUser9/bar_image_9.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser9/bar_image_10.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser9/bar_image_11.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser9/bar_image_12.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages9 = filesToMultipart(venueImageFiles9);

        VenueDTO venue9 = new VenueDTO();
        venue9.setName("Luna Bar");
        venue9.setType("Bar");
        venue9.setCapacity(180);
        venue9.setCity("Berlin");
        venue9.setDistrict(null);
        venue9.setStreet("Frankfurter Allee");
        venue9.setHouseNumber("15");
        venue9.setPostalCode(10247);
        venue9.setDescription(null);
        venue9.setImageBlobs(venueImages9);



        // === Host 10: Stadtklang ===
        RegistrationHostDTO host10 = new RegistrationHostDTO();
        host10.setFirstname("Emma");
        host10.setLastname("Schulz");
        host10.setEmail("emma.stadtklang@example.com");
        host10.setEmailConfirm("emma.stadtklang@example.com");
        host10.setGender("Weiblich");
        host10.setBirthday("1993-08-30");
        host10.setUsername("stadtklang_emma");
        host10.setPassword("password");
        host10.setRole(Roles.HOST);


        List<File> venueImageFiles10 = List.of(
            new File(String.format("%s/HostUser10/bar_image_13.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser10/bar_image_14.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser10/bar_image_15.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser10/bar_image_16.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages10 = filesToMultipart(venueImageFiles10);

        VenueDTO venue10 = new VenueDTO();
        venue10.setName("Stadtklang");
        venue10.setType("Bar");
        venue10.setCapacity(100);
        venue10.setCity("Berlin");
        venue10.setDistrict(null);
        venue10.setStreet("Schlüterstraße");
        venue10.setHouseNumber("9");
        venue10.setPostalCode(10707);
        venue10.setDescription(null);
        venue10.setImageBlobs(venueImages10);



        // === Host 11: Eckstein ===
        RegistrationHostDTO host11 = new RegistrationHostDTO();
        host11.setFirstname("Paul");
        host11.setLastname("Hoffmann");
        host11.setEmail("paul.eckstein@example.com");
        host11.setEmailConfirm("paul.eckstein@example.com");
        host11.setGender("Männlich");
        host11.setBirthday("1984-02-14");
        host11.setUsername("eckstein_paul");
        host11.setPassword("password");
        host11.setRole(Roles.HOST);


        List<File> venueImageFiles11 = List.of(
            new File(String.format("%s/HostUser11/bar_image_17.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser11/bar_image_18.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser11/bar_image_19.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser11/bar_image_20.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages11 = filesToMultipart(venueImageFiles11);

        VenueDTO venue11 = new VenueDTO();
        venue11.setName("Eckstein");
        venue11.setType("Bar");
        venue11.setCapacity(80);
        venue11.setCity("Berlin");
        venue11.setDistrict(null);
        venue11.setStreet("Müllerstraße");
        venue11.setHouseNumber("3");
        venue11.setPostalCode(13353);
        venue11.setDescription(null);
        venue11.setImageBlobs(venueImages11);



        // === Host 12: Kiezhaus ===
        RegistrationHostDTO host12 = new RegistrationHostDTO();
        host12.setFirstname("Mia");
        host12.setLastname("Wagner");
        host12.setEmail("mia.kiezhaus@example.com");
        host12.setEmailConfirm("mia.kiezhaus@example.com");
        host12.setGender("Weiblich");
        host12.setBirthday("1994-10-07");
        host12.setUsername("kiezhaus_mia");
        host12.setPassword("password");
        host12.setRole(Roles.HOST);


        List<File> venueImageFiles12 = List.of(
            new File(String.format("%s/HostUser12/bar_image_21.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser12/bar_image_22.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser12/bar_image_23.jpg", baseMockimagesPath)),
            new File(String.format("%s/HostUser12/bar_image_24.jpg", baseMockimagesPath))
        );
        List<MultipartFile> venueImages12 = filesToMultipart(venueImageFiles12);

        VenueDTO venue12 = new VenueDTO();
        venue12.setName("Kiezhaus");
        venue12.setType("Bar");
        venue12.setCapacity(90);
        venue12.setCity("Berlin");
        venue12.setDistrict(null);
        venue12.setStreet("Warschauer Straße");
        venue12.setHouseNumber("55");
        venue12.setPostalCode(10243);
        venue12.setDescription(null);
        venue12.setImageBlobs(venueImages12);


        List<RegistrationHostDTO> hostDTOs = new ArrayList<>(List.of(host1, host2, host3, host4, host5, host6, host7, host8, host9, host10, host11, host12));
        List<VenueDTO> venueDTOs = new ArrayList<>(List.of(venue1, venue2, venue3, venue4, venue5, venue6, venue7, venue8, venue9, venue10, venue11, venue12));
        List<EventDTO> eventDTOs = new ArrayList<>(List.of(event1));
        
        mockDataService.mockDataInitializer(hostDTOs, venueDTOs, eventDTOs);

		// serverstartService.createHostUserByServerstart(host1, imagesHost1, new ArrayList<>(List.of(host1Event1)));

        

	}
}