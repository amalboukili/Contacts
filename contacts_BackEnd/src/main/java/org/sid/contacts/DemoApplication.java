package org.sid.contacts;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.contacts.dao.ContactRepository;
import org.sid.contacts.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired
	private ContactRepository contactRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// specification du format de la date
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		contactRepository
				.save(new Contact("Boukili", "Amal", df.parse("12/01/1998"), "amal@gmail.com", 1234567890, "amal.png"));
		contactRepository.save(
				new Contact("Maach", "Mourad", df.parse("11/03/1991"), "mourad@gmail.com", 987654321, "amal.png"));
		contactRepository.save(new Contact("Filali", "Youssef", df.parse("25/05/1992"), "youssef@gmail.com", 987654321,
				"youssef.png"));
		contactRepository.save(new Contact("Hassani", "Abdelhamid", df.parse("30/11/1993"), "hassani@gmail.com",
				987654321, "hassani.png"));
		contactRepository.save(new Contact("hajjami", "Amine", df.parse("24/12/1995"), "amine@gmail.com",
				987654321, "hassani.png"));

		contactRepository.findAll().forEach(c -> {
			System.out.println(c.getNom());
		});

	}

}
