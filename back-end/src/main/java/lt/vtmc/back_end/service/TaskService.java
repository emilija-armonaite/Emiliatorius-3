package lt.vtmc.back_end.service;

import java.util.List;
import java.util.stream.Collectors;
import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.Task;
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

    public List<TaskDTO> findAll() {
        return taskRepository.findAll()
                .stream()
                .map(task -> mapToDTO(task, new TaskDTO()))
                .collect(Collectors.toList());
    }

    public TaskDTO get(final Long id) {
        return taskRepository.findById(id)
                .map(task -> mapToDTO(task, new TaskDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final TaskDTO taskDTO) {
        final Task task = new Task();
        mapToEntity(taskDTO, task);
        return taskRepository.save(task).getId();
    }

    public void update(final Long id, final TaskDTO taskDTO) {
        final Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(taskDTO, task);
        taskRepository.save(task);
    }

    public void delete(final Long id) {
        taskRepository.deleteById(id);
    }

    private TaskDTO mapToDTO(final Task task, final TaskDTO taskDTO) {
        taskDTO.setId(task.getId());
        taskDTO.setName(task.getName());
        taskDTO.setUserStory(task.getUserStory());
        taskDTO.setPriority(task.getPriority());
        taskDTO.setStatus(task.getStatus());
        taskDTO.setCreationDate(task.getCreationDate());
        taskDTO.setUpdateDate(task.getUpdateDate());
        taskDTO.setProjectTask(task.getProjectTask() == null ? null : task.getProjectTask().getId());
        return taskDTO;
    }

    private Task mapToEntity(final TaskDTO taskDTO, final Task task) {
        task.setName(taskDTO.getName());
        task.setUserStory(taskDTO.getUserStory());
        task.setPriority(taskDTO.getPriority());
        task.setStatus(taskDTO.getStatus());
        task.setCreationDate(taskDTO.getCreationDate());
        task.setUpdateDate(taskDTO.getUpdateDate());
        if (taskDTO.getProjectTask() != null && 
                (task.getProjectTask() == null || !task.getProjectTask().getId().equals(taskDTO.getProjectTask()))) {
            final Project projectTask = projectRepository.findById(taskDTO.getProjectTask())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "projectTask not found"));
            task.setProjectTask(projectTask);
        }
        return task;
    }

}
