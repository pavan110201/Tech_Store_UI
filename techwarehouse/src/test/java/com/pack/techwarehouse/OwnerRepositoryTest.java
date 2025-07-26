package com.pack.techwarehouse;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import com.pack.techwarehouse.domain.Owner;
import com.pack.techwarehouse.domain.OwnerRepository;
@DataJpaTest
public class OwnerRepositoryTest 
{
	@Autowired
	private OwnerRepository repository;
	
	@Test
	void saveOwner() 
	{
		repository.save(new Owner("James", "Johnson"));
		assertThat(repository.findByFirstname("James").isPresent()).isTrue();
	}
	@Test
	void deleteOwners() 
	{
		repository.save(new Owner("Ben", "Morris"));
		repository.deleteAll();
		assertThat(repository.count()).isEqualTo(0);
	}
}