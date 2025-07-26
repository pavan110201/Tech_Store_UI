package com.pack.techwarehouse;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import com.pack.techwarehouse.domain.Laptop;
import com.pack.techwarehouse.domain.LaptopRepository;
import com.pack.techwarehouse.domain.Owner;
import com.pack.techwarehouse.domain.OwnerRepository;
import com.pack.techwarehouse.domain.AppUser;
import com.pack.techwarehouse.domain.AppUserRepository;
@SpringBootApplication
public class TechwarehouseApplication implements CommandLineRunner 
{
    private static final Logger logger = LoggerFactory.getLogger(TechwarehouseApplication.class);
    private final LaptopRepository laptopRepository;
    private final OwnerRepository ownerRepository;
    private final AppUserRepository urepository;
    public TechwarehouseApplication(LaptopRepository laptopRepository, OwnerRepository ownerRepository, AppUserRepository urepository) 
    {
        this.laptopRepository = laptopRepository;
        this.ownerRepository = ownerRepository;
        this.urepository = urepository;    
    }
    public static void main(String[] args) 
    {
        SpringApplication.run(TechwarehouseApplication.class, args);
    }
    @Override
    public void run(String... args) throws Exception 
    {
        Owner owner1 = new Owner("John", "Johnson");
        Owner owner2 = new Owner("Mary", "Robinson");
        Owner owner3 = new Owner("David", "Smith");
        Owner owner4 = new Owner("Linda", "Brown");
        Owner owner5 = new Owner("Michael", "Davis");
        ownerRepository.saveAll(Arrays.asList(owner1, owner2, owner3, owner4, owner5));

        Laptop laptop1 = new Laptop("Dell", "XPS 13","Silver","3f6d9c7a-e1b4-4cfe-9b4b-8fc7a556a3cz",2025, 1200, owner1);
        Laptop laptop2 = new Laptop("Apple", "MacBook Pro","blue","9f6d9c7a-a2b4-4cfe-9b4b-8fc7a556a3dk", 2025, 1500, owner2);
        Laptop laptop3 = new Laptop("Lenovo", "ThinkPad X1","black","7d6d9c7a-a2b4-4cfe-9b4b-8fc7a556a3np", 2024, 1700, owner3);
        Laptop laptop4 = new Laptop("HP", "Spectre x360","blue","6d6d9c7a-a2b4-4cfe-9b4b-8fc7a556a3ea", 2025, 1300, owner4);
        Laptop laptop5 = new Laptop("Asus", "ROG Zephyrus","black","8a6d9c7a-a2b4-4cfe-9b4b-8fc7a556a3df", 2024, 1800, owner5);
        laptopRepository.saveAll(Arrays.asList(laptop1, laptop2, laptop3, laptop4, laptop5));
   
        urepository.save(new AppUser(
        	    "user", "$2a$12$N0hMG5zyZ29YJsw8RscYqOO65dDww7Ug1zt9WTTFMwCBHR/agxAey", "USER"));
        	urepository.save(new AppUser(
        	    "admin", "$2a$12$EA8edaPVy8ny0L0fP2ZRbOUnL86RRRF3EVt07LB2edaAytetDzfpq", "ADMIN"));
        for (Laptop laptop : laptopRepository.findAll()) 
        {
        	logger.info("serialNumber: {}, id: {}", laptop.getserialNumber(), laptop.getId());
        }
    }
}