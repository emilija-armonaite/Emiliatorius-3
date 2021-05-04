package lt.vtmc.back_end.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.ProjectStatus;
import lt.vtmc.back_end.domain.Task;
import lt.vtmc.back_end.model.ProjectDTO;
import lt.vtmc.back_end.model.ReturnProject;
import lt.vtmc.back_end.repos.ProjectRepository;
import lt.vtmc.back_end.repos.TaskRepository;
import lt.vtmc.back_end.repos.UserRepository;


@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;
    private final TaskRepository taskRepository;

    public ProjectService(final ProjectRepository projectRepository,
    		final UserRepository userRepository, final TaskRepository taskRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
        this.taskRepository = taskRepository;
    }

    public List<ReturnProject> findAll() {
        return projectRepository.findAll()
        		.stream().map(pro -> mapToReturnProject(pro, new ReturnProject()))
        		.collect(Collectors.toList());
    }

    public Project get(final Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final ProjectDTO projectDTO) {
        final Project project = new Project();
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        project.setProjectTaskTasks(new HashSet<Task>());
        project.setStatus(ProjectStatus.IN_PROGRESS.toString());
        project.setTasksAmount(0);
        project.setTasksLeft(0);
        return projectRepository.save(project).getId();
    }
    
    public void addTask(final Long id, final Task task) {
    	final Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    	Set<Task> tasks = project.getProjectTaskTasks();
    	tasks.add(task);
    	project.setProjectTaskTasks(tasks);
    	projectRepository.save(project);
    }
    
    public void updateStatus(final Long id, final String status) {
    	final Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    	
    	if(status.isBlank() || status == null) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    	}
    	if(status.equals(ProjectStatus.IN_PROGRESS.toString())) {
    		project.setStatus(ProjectStatus.IN_PROGRESS.toString());
    	}
    	if(status.equals(ProjectStatus.DONE.toString())) {
    		project.setStatus(ProjectStatus.DONE.toString());
    	}
    	
     projectRepository.save(project);
    }

    public void update(final Long id, final ProjectDTO projectDTO) {
        final Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        projectRepository.save(project);
    }

    public void delete(final Long id) {
        projectRepository.deleteById(id);
    }

    private ReturnProject mapToReturnProject(final Project project, final ReturnProject returnProject) {
    	returnProject.setId(project.getId());
    	returnProject.setName(project.getName());
    	returnProject.setDescription(project.getDescription());
    	returnProject.setStatus(project.getStatus());
    	returnProject.setTasksAmount(project.getTasksAmount());
    	returnProject.setTasksLeft(project.getTasksLeft());
    	return returnProject;
    }
    


}
