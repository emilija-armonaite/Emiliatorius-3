package lt.vtmc.back_end.service;

import java.util.List;
import java.util.stream.Collectors;
import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.Task;
import lt.vtmc.back_end.domain.TaskPriority;
import lt.vtmc.back_end.domain.TaskStatus;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.repos.ProjectRepository;
import lt.vtmc.back_end.repos.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    public TaskService(final TaskRepository taskRepository,
            final ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
    }

    public List<Task> findAll(final Long id) {
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
        task.setPriority(TaskPriority.MEDIUM.toString());
        task.setStatus(TaskStatus.TO_DO.toString());
        Project project = projectRepository.findById(projectId)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        task.setProjectTask(project);
        return taskRepository.save(task).getId();
    }

    public void update(final Long id, final TaskDTO taskDTO) {
        final Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        task.setName(taskDTO.getName());
        task.setUserStory(taskDTO.getUserStory());
        taskRepository.save(task);
    }

    public void delete(final Long id) {
        taskRepository.deleteById(id);
    }


}
