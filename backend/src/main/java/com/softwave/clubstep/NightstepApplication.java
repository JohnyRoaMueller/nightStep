package com.softwave.clubstep;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.multipart.MultipartFile;

import com.softwave.clubstep.DTO.RegistrationHostUserDTO;
import com.softwave.clubstep.controllers.RegistrationController;
import com.softwave.clubstep.domain.repository.GuestRepository;
import com.softwave.clubstep.domain.repository.HostRepository;
import com.softwave.clubstep.domain.repository.VenueRepository;
import com.softwave.clubstep.enums.Roles;
import com.softwave.clubstep.services.ServerstartService;

import jakarta.persistence.EntityManager;
import jakarta.security.auth.message.config.AuthConfigFactory.RegistrationContext;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class NightstepApplication implements CommandLineRunner {

	@Autowired
    private EntityManager entityManager;

	
	//*			REPOSITORYS				 */
	private final VenueRepository venueRepository;
	private final GuestRepository guestRepository;
	private final HostRepository hostRepository;
	private final ServerstartService serverstartService;
	//*									 */

	//*			CONTROLLER					 */
	private final RegistrationController registrationController;

	public NightstepApplication(VenueRepository venueRepository, GuestRepository guestRepository, HostRepository hostRepository, RegistrationController registrationController, ServerstartService serverstartService) {
		this.venueRepository = venueRepository;
		this.guestRepository = guestRepository;
		this.hostRepository = hostRepository;
		this.registrationController = registrationController;
		this.serverstartService = serverstartService;
	}

    Logger logger = LoggerFactory.getLogger(getClass());


	public static void main(String[] args) {
		

		SpringApplication.run(NightstepApplication.class, args);
		System.out.println("Application started");
	}

	
	@Override
	public void run(String... args) {

        // --- 6 Clubs in Berlin ---
        // 1. Nachtwerk
        RegistrationHostUserDTO host1 = new RegistrationHostUserDTO();
        host1.setFirstname("Max");
        host1.setLastname("Mustermann");
        host1.setEmail("max.nachtwerk@example.com");
        host1.setEmailConfirm("max.nachtwerk@example.com");
        host1.setGender("Männlich");
        host1.setBirthday("1985-01-15");
        host1.setUsername("nachtwerk_max");
        host1.setPassword("y");
        host1.setNameOfVenue("Nachtwerk");
        host1.setTypeOfVenue("Nightclub");
        host1.setCapacity("1200");
        host1.setCityOfVenue("Berlin");
        host1.setStreetOfVenue("Hauptstraße");
        host1.setHousenumberOfVenue("5A");
        host1.setPostcodeOfVenue("10115");
        host1.setRole(Roles.HOST);
        List<File> imagesHost1 = new ArrayList<>();
        imagesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_1.jpg"));
        imagesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_2.jpg"));
        imagesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_3.jpg"));
        imagesHost1.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser1\\club_image_4.jpg"));



        // 2. Eclipse
        RegistrationHostUserDTO host2 = new RegistrationHostUserDTO();
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
        List<File> imagesHost2 = new ArrayList<>();
        imagesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_5.jpg"));
        imagesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_6.jpg"));
        imagesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_7.jpg"));
        imagesHost2.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser2\\club_image_8.jpg"));


        // 3. Urban Pulse
        RegistrationHostUserDTO host3 = new RegistrationHostUserDTO();
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
        List<File> imagesHost3 = new ArrayList<>();
        imagesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_9.jpg"));
        imagesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_10.jpg"));
        imagesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_11.jpg"));
        imagesHost3.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser3\\club_image_12.jpg"));


        // 4. Schattentanz
        RegistrationHostUserDTO host4 = new RegistrationHostUserDTO();
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
        List<File> imagesHost4 = new ArrayList<>();
        imagesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_13.jpg"));
        imagesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_14.jpg"));
        imagesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_15.jpg"));
        imagesHost4.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser4\\club_image_16.jpg"));


        // 5. Aurora Club
        RegistrationHostUserDTO host5 = new RegistrationHostUserDTO();
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
        List<File> imagesHost5 = new ArrayList<>();
        imagesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_17.jpg"));
        imagesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_18.jpg"));
        imagesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_19.jpg"));
        imagesHost5.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser5\\club_image_20.jpg"));
        


        // 6. Morgenlicht
        RegistrationHostUserDTO host6 = new RegistrationHostUserDTO();
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
        List<File> imagesHost6 = new ArrayList<>();
        imagesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_21.jpg"));
        imagesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_22.jpg"));
        imagesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_23.jpg"));
        imagesHost6.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser6\\club_image_24.jpg"));


        // --- 6 Bars in Berlin ---
        // 7. Velvet Lounge
        RegistrationHostUserDTO host7 = new RegistrationHostUserDTO();
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
        List<File> imagesHost7 = new ArrayList<>();
        imagesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_1.jpg"));
        imagesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_2.jpg"));
        imagesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_3.jpg"));
        imagesHost7.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser7\\bar_image_4.jpg"));


        // 8. Goldene Stunde
        RegistrationHostUserDTO host8 = new RegistrationHostUserDTO();
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
        List<File> imagesHost8 = new ArrayList<>();
        imagesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_5.jpg"));
        imagesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_6.jpg"));
        imagesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_7.jpg"));
        imagesHost8.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser8\\bar_image_8.jpg"));


        // 9. Luna Bar
        RegistrationHostUserDTO host9 = new RegistrationHostUserDTO();
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
        List<File> imagesHost9 = new ArrayList<>();
        imagesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_9.jpg"));
        imagesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_10.jpg"));
        imagesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_11.jpg"));
        imagesHost9.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser9\\bar_image_12.jpg"));


        // 10. Stadtklang
        RegistrationHostUserDTO host10 = new RegistrationHostUserDTO();
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
        List<File> imagesHost10 = new ArrayList<>();
        imagesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_13.jpg"));
        imagesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_14.jpg"));
        imagesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_15.jpg"));
        imagesHost10.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser10\\bar_image_16.jpg"));

        // 11. Eckstein
        RegistrationHostUserDTO host11 = new RegistrationHostUserDTO();
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
        List<File> imagesHost11 = new ArrayList<>();
        imagesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_17.jpg"));
        imagesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_18.jpg"));
        imagesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_19.jpg"));
        imagesHost11.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser11\\bar_image_20.jpg"));


        // 12. Kiezhaus
        RegistrationHostUserDTO host12 = new RegistrationHostUserDTO();
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
        List<File> imagesHost12 = new ArrayList<>();
        imagesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_21.jpg"));
        imagesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_22.jpg"));
        imagesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_23.jpg"));
        imagesHost12.add(new File("C:\\vscode-projects\\nightstep-project\\MockAccountImages\\HostUser12\\bar_image_24.jpg"));

	
		serverstartService.createHostUserByServerstart(host1, imagesHost1);
        serverstartService.createHostUserByServerstart(host2, imagesHost2);
        serverstartService.createHostUserByServerstart(host3, imagesHost3);
        serverstartService.createHostUserByServerstart(host4, imagesHost4);
        serverstartService.createHostUserByServerstart(host5, imagesHost5);
        serverstartService.createHostUserByServerstart(host6, imagesHost6);
        serverstartService.createHostUserByServerstart(host7, imagesHost7);
        serverstartService.createHostUserByServerstart(host8, imagesHost8);
        serverstartService.createHostUserByServerstart(host9, imagesHost9);
        serverstartService.createHostUserByServerstart(host10, imagesHost10);
        serverstartService.createHostUserByServerstart(host11, imagesHost11);
        serverstartService.createHostUserByServerstart(host12, imagesHost12);



	}
}

