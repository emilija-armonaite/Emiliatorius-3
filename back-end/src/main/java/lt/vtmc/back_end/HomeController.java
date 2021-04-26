package lt.vtmc.back_end;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import lt.vtmc.back_end.model.AuthenticationRequest;
import lt.vtmc.back_end.service.MyUserDetailsService;
import lt.vtmc.back_end.util.JwtUtil;


@RestController
public class HomeController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;

    @PostMapping(value = "/authenticate")
	public ResponseEntity<Map<String,Object>> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
    	 Map<String,Object> response = new HashMap<String, Object>();
    	
    	try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getMail(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getMail());

		final String jwt = jwtUtil.generateToken(userDetails);
//		 response.put(userDetails.getUsername(), jwt);
		response.put("token", jwt);
		response.put("mail", userDetails.getUsername());

		return ResponseEntity.accepted().body(response);
	}

}



