package com.pack.techwarehouse.service;
import org.springframework.stereotype.Component;
import java.security.Key;
import java.util.Date;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
//JWT Token Generation
/*
import org.springframework.http.HttpHeaders;
import jakarta.servlet.http.HttpServletRequest;
@Component
public class JwtService 
{
  static final long EXPIRATIONTIME = 86400000;  
  static final String PREFIX = "Bearer";
  static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
  public String getToken(String username) 
  {
    String token = Jwts.builder()
      .setSubject(username)
      .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
      .signWith(key)
      .compact();  
    return token;
  }
  public String getAuthUser(HttpServletRequest request) 
  {
    String token = request.getHeader(HttpHeaders.AUTHORIZATION);
    if (token != null) 
    {
      String user = Jwts.parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(token.replace(PREFIX, ""))
        .getBody()
        .getSubject();
      if (user != null)
        return user;
    }
    return null;
  }
}
*/

// JWT Role based access token generation and validation
import org.springframework.security.core.userdetails.UserDetails;
@Component
public class JwtService 
{
    static final long EXPIRATIONTIME = 86400000;
    static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    public String getToken(String username) 
    {
        return Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(key)
                .compact();
    }
    public String getUsernameFromToken(String token) 
    {
        try {
            	return Jwts.parserBuilder()
            			.setSigningKey(key)
	                    .build()
	                    .parseClaimsJws(token)
	                    .getBody()
	                    .getSubject();
        	}
        catch (Exception e) 
        {
            return null;
        }
    }
    public boolean validateToken(String token, UserDetails userDetails)
    {
        String username = getUsernameFromToken(token);
        return (username != null
                && username.equals(userDetails.getUsername())
                && !isTokenExpired(token));
    }
    public boolean isTokenExpired(String token) 
    {
        try {
	            Date expiration = Jwts.parserBuilder()
	                    .setSigningKey(key)
	                    .build()
	                    .parseClaimsJws(token)
	                    .getBody()
	                    .getExpiration();
	            return expiration.before(new Date());
        	} 
        catch (Exception e) 
        {
            return true;
        }
    }
}
