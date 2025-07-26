package com.pack.techwarehouse;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.pack.techwarehouse.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
// JWT Access
/*
@Component
public class AuthenticationFilter extends OncePerRequestFilter {
	private final JwtService jwtService;

	public AuthenticationFilter(JwtService jwtService) {
		this.jwtService = jwtService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, java.io.IOException {
		// Get token from the Authorization header
		String jws = request.getHeader(HttpHeaders.AUTHORIZATION);
		if (jws != null) {
			// Verify token and get user
			String user = jwtService.getAuthUser(request);
			// Authenticate
			Authentication authentication = new UsernamePasswordAuthenticationToken(user, null,
					java.util.Collections.emptyList());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		filterChain.doFilter(request, response);
	}
}
*/

//Role Based JWT Access
import org.springframework.security.core.userdetails.UserDetails;
import com.pack.techwarehouse.service.UserDetailsServiceImpl;
@Component
public class AuthenticationFilter extends OncePerRequestFilter 
{
    private final JwtService jwtService;
    private final UserDetailsServiceImpl userDetailsService;
    public AuthenticationFilter(JwtService jwtService, UserDetailsServiceImpl userDetailsService) 
    {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, java.io.IOException 
    {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) 
        {
            String token = authHeader.substring(7);
            String username = jwtService.getUsernameFromToken(token);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) 
            {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                if (jwtService.validateToken(token, userDetails)) 
                {
                    Authentication authentication = new UsernamePasswordAuthenticationToken( userDetails, null, userDetails.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        }
        filterChain.doFilter(request, response);
    }
}

