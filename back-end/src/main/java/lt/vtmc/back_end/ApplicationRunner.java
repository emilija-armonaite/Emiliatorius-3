package lt.vtmc.back_end;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

import java.util.List;

import lt.vtmc.back_end.model.ProjectDTO;
import lt.vtmc.back_end.model.ReturnProject;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.model.UserDTO;
import lt.vtmc.back_end.service.ProjectService;
import lt.vtmc.back_end.service.TaskService;
import lt.vtmc.back_end.service.UserService;

@Component
public class ApplicationRunner implements org.springframework.boot.ApplicationRunner {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private TaskService taskService;
	
	private final Logger log = LoggerFactory.getLogger(ApplicationRunner.class);

	@Override
	public void run(ApplicationArguments args) throws Exception {
		log.trace("Entering method run");
		
		log.debug("Creating first admin user");
		UserDTO user = new UserDTO("admin@mail.com", "password");
		userService.create(user);
		
		log.debug("Creating projects with tasks");
		for(int i = 0; i <= 100; i++) {
			ProjectDTO p = new ProjectDTO("Project " + i, "Description");
			projectService.create(p);
		}
		
		List<ReturnProject> projects = projectService.findAll();
		for (ReturnProject p : projects) {
			for(int j = 0; j <= 4; j++) {
				TaskDTO t = new TaskDTO("Task " + j, "UserStory", "MEDIUM");
				taskService.create(p.getId(), t);
			}
		}
		
	}

}
