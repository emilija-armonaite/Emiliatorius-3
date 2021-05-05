package lt.vtmc.back_end.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.Task;
import lt.vtmc.back_end.domain.TaskPriority;
import lt.vtmc.back_end.domain.TaskStatus;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.repos.ProjectRepository;
import lt.vtmc.back_end.repos.TaskRepository;


@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    
    private DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public TaskService(final TaskRepository taskRepository,
            final ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
    }
    
    public List<Task> getAll() {
    	return taskRepository.findAll();
    }

    public List<Task> findAllByProject(final Long id) {
    	final Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    	return taskRepository.findByProjectTask(project);
    }

    public Task get(final Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final Long projectId,final TaskDTO taskDTO) {
        final Task task = new Task();
        task.setName(taskDTO.getName());
        task.setUserStory(taskDTO.getUserStory());
        task.setStatus(TaskStatus.TO_DO.toString());
        task.setCreationDate(LocalDateTime.now().format(dateFormat));
        task.setUpdateDate(LocalDateTime.now().format(dateFormat));
        
        if( taskDTO.getPriority() == null || taskDTO.getPriority().isBlank()) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    	}
        if(taskDTO.getPriority().equals(TaskPriority.LOW.toString())) {
        	task.setPriority(TaskPriority.LOW.toString());
        }
        if(taskDTO.getPriority().equals(TaskPriority.MEDIUM.toString())) {
        	task.setPriority(TaskPriority.MEDIUM.toString());
        }
        if(taskDTO.getPriority().equals(TaskPriority.HIGH.toString())) {
        	task.setPriority(TaskPriority.HIGH.toString());
        }
   
        Project project = projectRepository.findById(projectId)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        task.setProjectTask(project);
        
    	taskRepository.save(task);
    	
    	Long prId = task.getProjectTask().getId();
    	updateCount(prId);
        
        return task.getId();
    }
    
    public void updateStatus(final Long id, final String status) {
    	final Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    	
    	if(status == null || status.isBlank()) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    	}
    	if(status.equals(TaskStatus.TO_DO.toString())) {
    		task.setStatus(TaskStatus.TO_DO.toString());
    	}
    	if(status.equals(TaskStatus.IN_PROGRESS.toString())) {
    		task.setStatus(TaskStatus.IN_PROGRESS.toString());
    	}
    	if(status.equals(TaskStatus.DONE.toString())) {
    		task.setStatus(TaskStatus.DONE.toString());
    	}
    	
    	taskRepository.save(task);
    	
    	Long prId = task.getProjectTask().getId();
    	updateCount(prId);
    }

    public void update(final Long id, final TaskDTO taskDTO) {
        final Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        task.setName(taskDTO.getName());
        
        if(taskDTO.getPriority() == null || taskDTO.getPriority().isBlank()) {
    		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    	}
        if(taskDTO.getPriority().equals(TaskPriority.LOW.toString())) {
        	task.setPriority(TaskPriority.LOW.toString());
        }
        if(taskDTO.getPriority().equals(TaskPriority.MEDIUM.toString())) {
        	task.setPriority(TaskPriority.MEDIUM.toString());
        }
        if(taskDTO.getPriority().equals(TaskPriority.HIGH.toString())) {
        	task.setPriority(TaskPriority.HIGH.toString());
        }
        
        task.setUserStory(taskDTO.getUserStory());
        task.setUpdateDate(LocalDateTime.now().format(dateFormat));
        taskRepository.save(task);
    }

    public void delete(final Long id) {
    	final Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        taskRepository.deleteById(id);
        
        Long prId = task.getProjectTask().getId();
        updateCount(prId);
    }
    
    private void updateCount(final Long id) {
    	Project project = projectRepository.findById(id)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    	project.setTasksAmount(project.getProjectTaskTasks().size());
        project.setTasksLeft((int)project.getProjectTaskTasks().stream()
        		.filter(t -> !t.getStatus().equals(TaskStatus.DONE.toString())).count());
        projectRepository.save(project);
    }


}
