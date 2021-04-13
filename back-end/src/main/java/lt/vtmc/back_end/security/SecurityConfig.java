package lt.vtmc.back_end.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final PasswordEncoder passwordEncoder;
	
	@Autowired
	public SecurityConfig(PasswordEncoder passwordEncoder) {
		super();
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
			.antMatchers("/", "index", "/css/*", "/js/*", "/console/**")
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.formLogin()
			.defaultSuccessUrl("/api/projects")
			.and()
			.logout()
			.logoutUrl("/logout")
			.logoutSuccessUrl("/login");
		
		http.csrf().disable();
        http.headers().frameOptions().disable();
	}
	
	@Override
	@Bean
	protected UserDetailsService userDetailsService() {
		UserDetails user = User.builder()
			.username("user@mail.com")
			.password(passwordEncoder.encode("password"))
			.roles("USER")
			.build();
		
		UserDetails admin = User.builder()
			.username("admin@mail.com")
			.password(passwordEncoder.encode("password"))
			.roles("ADMIN")
			.build();
		
		return new InMemoryUserDetailsManager(
				user,
				admin
				);
	}

}
