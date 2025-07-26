package com.pack.techwarehouse.domain;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource
public interface LaptopRepository extends CrudRepository<Laptop, Long> 
{
    List<Laptop> findByBrand(@Param("brand") String brand);
    List<Laptop> findByColor(@Param("color") String color);	
}
