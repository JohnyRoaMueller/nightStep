package com.softwave.clubstep;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.repository.ClubRepository;
import com.softwave.clubstep.domain.repository.GuestRepository;

import jakarta.persistence.EntityManager;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ClubstepApplication implements CommandLineRunner {

	@Autowired
    private EntityManager entityManager;



	//*			REPOSITORYS				 */
	private final ClubRepository clubRepo;
	private final GuestRepository guestRepo;

	//*									 */
	public ClubstepApplication(ClubRepository clubRepo, GuestRepository guestRepo, GuestRepository hostRepo) {
		this.clubRepo = clubRepo;
		this.guestRepo = guestRepo;
	}



	public static void main(String[] args) {
		

		SpringApplication.run(ClubstepApplication.class, args);
		System.out.println("Application started");
	}


	@Override
	public void run(String... args) {




		String name = "clubName";
		String type = "type";
		int capacity = 0;
		String city = "city";
		String district = "clubDistrict";
		String street = "street";
		String houseNumber = "housenumber";
		String postalCode = "postalCode";
		String Description = "clubDescription";
		List<String> picAdresses = new ArrayList<String>();
		picAdresses.add("C:\\vscode-projects\\clubstep-project\\uploads\\images\\AboutBlank\\AboutBlank.png");

		/**
		clubRepo.deleteAll();

		Club clubOne = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);
		Club clubTwo = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);
		Club clubThree = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);
		Club clubFour = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);
		Club clubFive = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);
		Club clubSix = new Club(name, type, capacity, city, district, street, houseNumber, postalCode, Description, picAdresses);


		clubRepo.save(clubOne);
		clubRepo.save(clubTwo);
		clubRepo.save(clubThree);
		clubRepo.save(clubFour);
		clubRepo.save(clubFive);
		clubRepo.save(clubSix);


		System.out.println("Club gespeichert: " + clubOne);
		*/
		
	}
}

