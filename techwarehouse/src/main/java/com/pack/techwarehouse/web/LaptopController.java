package com.pack.techwarehouse.web;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pack.techwarehouse.domain.Laptop;
import com.pack.techwarehouse.domain.LaptopRepository;
@RestController
public class LaptopController 
{
	private final LaptopRepository repository;
    public LaptopController(LaptopRepository repository) 
    {
        this.repository = repository;
    }

    @GetMapping("/laptops")
    public Iterable<Laptop> getLaptops() 
    {
        return repository.findAll();
    }
}