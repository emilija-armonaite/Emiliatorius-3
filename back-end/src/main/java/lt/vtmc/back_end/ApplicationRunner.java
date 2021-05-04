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
		
		for(int i = 0; i <= 10; i++) {
			ProjectDTO p = new ProjectDTO("Project " + i, "Description");
			projectService.create(p);
		}
		
		
		TaskDTO t = new TaskDTO("Task00", "UserStory", "MEDIUM");
		taskService.create((long) 10001, t);
		TaskDTO t1 = new TaskDTO("Task01", "UserStory", "MEDIUM");
		taskService.create((long) 10001, t1);
		TaskDTO t2 = new TaskDTO("Task02", "UserStory", "MEDIUM");
		taskService.create((long) 10001, t2);

	}

}
