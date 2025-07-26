package com.pack.techwarehouse;
import com.pack.techwarehouse.web.LaptopController;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
@SpringBootTest
class TechwarehouseApplicationTests 
{
	 @Autowired
    private LaptopController controller;
	@Test
	void contextLoads() 
	{
        assertThat(controller).isNotNull();
	}
}

