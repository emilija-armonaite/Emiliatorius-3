package lt.vtmc.back_end.service;

import java.util.List;
import java.util.stream.Collectors;
import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.User;
import lt.vtmc.back_end.model.ProjectDTO;
import lt.vtmc.back_end.repos.ProjectRepository;
import lt.vtmc.back_end.repos.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectService(final ProjectRepository projectRepository,
            final UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    public List<ProjectDTO> findAll() {
        return projectRepository.findAll()
                .stream()
                .map(project -> mapToDTO(project, new ProjectDTO()))
                .collect(Collectors.toList());
    }

    public ProjectDTO get(final Long id) {
        return projectRepository.findById(id)
                .map(project -> mapToDTO(project, new ProjectDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final ProjectDTO projectDTO) {
        final Project project = new Project();
        mapToEntity(projectDTO, project);
        return projectRepository.save(project).getId();
    }

    public void update(final Long id, final ProjectDTO projectDTO) {
        final Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(projectDTO, project);
        projectRepository.save(project);
    }

    public void delete(final Long id) {
        projectRepository.deleteById(id);
    }

    private ProjectDTO mapToDTO(final Project project, final ProjectDTO projectDTO) {
        projectDTO.setId(project.getId());
        projectDTO.setName(project.getName());
        projectDTO.setDescription(project.getDescription());
        projectDTO.setStatus(project.getStatus());
        projectDTO.setTasksAmount(project.getTasksAmount());
        projectDTO.setTasksLeft(project.getTasksLeft());
        projectDTO.setUserProject(project.getUserProject() == null ? null : project.getUserProject().getId());
        return projectDTO;
    }

    private Project mapToEntity(final ProjectDTO projectDTO, final Project project) {
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        project.setStatus(projectDTO.getStatus());
        project.setTasksAmount(projectDTO.getTasksAmount());
        project.setTasksLeft(projectDTO.getTasksLeft());
        if (projectDTO.getUserProject() != null && 
                (project.getUserProject() == null || !project.getUserProject().getId().equals(projectDTO.getUserProject()))) {
            final User userProject = userRepository.findById(projectDTO.getUserProject())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userProject not found"));
            project.setUserProject(userProject);
        }
        return project;
    }

}
