package com.pack.techwarehouse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
/*
@Configuration
public class OpenApiConfig 
{
	@Bean
	public OpenAPI carDatabaseOpenAPI() 
	{
		return new OpenAPI().info(new Info().title("Laptop REST API").description("My Tech Base").version("1.0"));
	}
}
*/
// Commands needed for base Login & Store credentials basic authorization for login
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.Components;
// Base Authorization
/*
@Configuration
public class OpenApiConfig 
{
	@Bean
	public OpenAPI carDatabaseOpenAPI() 
	{
       final String securitySchemeName = "basicAuth";
       return new OpenAPI()
            .info(new Info()
            .title("Laptop REST API")
            .description("My Tech Base")
            .version("1.0"))
            .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
            .components(new Components()
            .addSecuritySchemes(securitySchemeName, 
             new SecurityScheme()
                        .name(securitySchemeName)
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("basic")));
	}
}	
*/
// JWT Authorization
@Configuration
public class OpenApiConfig 
{
	@Bean
	public OpenAPI carDatabaseOpenAPI() 
	{
       final String securitySchemeName = "bearerAuth";
        return new OpenAPI()
            .info(new Info()
            .title("Laptop REST API")
            .description("My Tech Base")
            .version("1.0"))
            .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
            .components(new Components()
            .addSecuritySchemes(securitySchemeName, 
            new SecurityScheme()
                        .name(securitySchemeName)
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")));
	}	
}


 