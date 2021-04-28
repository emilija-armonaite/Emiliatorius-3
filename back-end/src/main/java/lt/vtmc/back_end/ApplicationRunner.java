package lt.vtmc.back_end;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

import lt.vtmc.back_end.model.ProjectDTO;
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

	@Override
	public void run(ApplicationArguments args) throws Exception {
		UserDTO user = new UserDTO("admin@mail.com", "password");
		userService.create(user);
		
		ProjectDTO p = new ProjectDTO("Project 00", "Description");
		projectService.create(p);
		ProjectDTO p1 = new ProjectDTO("Project 01", "Description");
		projectService.create(p1);
		ProjectDTO p2 = new ProjectDTO("Project 02", "Description");
		projectService.create(p2);
		
		TaskDTO t = new TaskDTO("Task00", "UserStory");
		taskService.create((long) 10001, t);
		TaskDTO t1 = new TaskDTO("Task01", "UserStory");
		taskService.create((long) 10001, t1);
		TaskDTO t2 = new TaskDTO("Task02", "UserStory");
		taskService.create((long) 10001, t2);

	}

}
