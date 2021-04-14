package lt.vtmc.back_end;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

import lt.vtmc.back_end.domain.User;
import lt.vtmc.back_end.repos.UserRepository;

@Component
public class ApplicationRunner implements org.springframework.boot.ApplicationRunner {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		User user = new User();
		user.setMail("admin@mail.com");
		user.setPassword("password");
		userRepo.saveAndFlush(user);
	}

}
