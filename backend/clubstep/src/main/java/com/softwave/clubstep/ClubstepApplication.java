package com.softwave.clubstep;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.softwave.clubstep.domain.entities.Club;
import com.softwave.clubstep.domain.repository.ClubRepository;
import com.softwave.clubstep.domain.repository.GuestUserRepository;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ClubstepApplication implements CommandLineRunner {

	//*			REPOSITORYS				 */
	private final ClubRepository clubRepo;
	private final GuestUserRepository guestRepo;

	//*									 */
	public ClubstepApplication(ClubRepository clubRepo, GuestUserRepository guestRepo, GuestUserRepository hostRepo) {
		this.clubRepo = clubRepo;
		this.guestRepo = guestRepo;
	}



	public static void main(String[] args) {
		SpringApplication.run(ClubstepApplication.class, args);
		System.out.println("Application started");
	}


	@Override
	public void run(String... args) {
		Club clubOne = new Club("clubName", "clubAdress", "clubDesc");
		clubRepo.save(clubOne);
		System.out.println("Club gespeichert: " + clubOne);
	}
}
