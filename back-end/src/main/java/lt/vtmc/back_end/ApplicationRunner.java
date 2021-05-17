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
		for(int i = 1; i <= 50; i++) {
			ProjectDTO p = new ProjectDTO("Project " + i, "Description");
			projectService.create(p);
		}
		ProjectDTO p1 = new ProjectDTO("geras projektas", "Description");
		projectService.create(p1);
		ProjectDTO p2 = new ProjectDTO("Negeras projektas", "Description");
		projectService.create(p2);
		
		List<ReturnProject> projects = projectService.findAll();
		for (ReturnProject p : projects) {
			for(int j = 1; j <= 20; j++) {
				TaskDTO t = new TaskDTO("Task " + j, "UserStory", "MEDIUM");
				taskService.create(p.getId(), t);
			}
			TaskDTO t1 = new TaskDTO("Labai svarbi uzduotis", "UserStory", "HIGH");
			taskService.create(p.getId(), t1);
			TaskDTO t2 = new TaskDTO("Visiskai nesvarbi uzduotis", "UserStory", "LOW");
			taskService.create(p.getId(), t2);
		}
		
	}

}
