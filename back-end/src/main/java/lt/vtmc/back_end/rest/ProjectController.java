package lt.vtmc.back_end.rest;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

import io.swagger.annotations.ApiOperation;
import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.Task;
import lt.vtmc.back_end.model.ProjectDTO;
import lt.vtmc.back_end.model.ReturnProject;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.repos.TaskRepository;
import lt.vtmc.back_end.service.ProjectService;
import lt.vtmc.back_end.service.TaskService;


@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/projects", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProjectController {

    private final ProjectService projectService;
    private final TaskService taskService;
    private final TaskRepository taskRepository;

    public ProjectController(final ProjectService projectService,
    		final TaskService taskService, final TaskRepository taskRepository) {
        this.projectService = projectService;
        this.taskService = taskService;
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public ResponseEntity<List<ReturnProject>> getAllProjects() {
        return ResponseEntity.ok(projectService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProject(@PathVariable final Long id) {
        return ResponseEntity.ok(projectService.get(id));
    }

    @PostMapping
    public ResponseEntity<Long> createProject(@RequestBody @Valid ProjectDTO projectDTO) {
        return new ResponseEntity<>(projectService.create(projectDTO), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}/tasks")
    @ApiOperation(value="addTask", notes="Priorities: LOW, MEDIUM, HIGH")
    public ResponseEntity<Void> addTask(@PathVariable final Long id,
            @RequestBody @Valid final TaskDTO taskDTO) {
    	Long taskId = taskService.create(id, taskDTO);
    	Task task = taskRepository.findById(taskId)
    			.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        projectService.addTask(id, task);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{id}/tasks")
	public ResponseEntity<List<Task>> getAllProjectTasks(@PathVariable final Long id) {
	    return ResponseEntity.ok(taskService.findAllByProject(id));
	}
    
    @PutMapping("/{id}/status")
    @ApiOperation(value="updateStatus", notes="Statuses: IN_PROGRESS, DONE")
    public ResponseEntity<Void> updateStatus(@PathVariable final Long id, 
    		@RequestParam final String status) {
        projectService.updateStatus(id, status);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateProject(@PathVariable final Long id,
            @RequestBody @Valid final ProjectDTO projectDTO) {
        projectService.update(id, projectDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable final Long id) {
        projectService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/export")
    public void exportCSV(HttpServletResponse response) throws Exception {
    	String filename = "Projects.csv";
    	
    	response.setContentType("txt/csv");
    	response.setHeader(HttpHeaders.CONTENT_DISPOSITION, 
    			"attachment; filename=\"" + filename + "\"");
    	
    	StatefulBeanToCsv<ReturnProject> writer = new StatefulBeanToCsvBuilder<ReturnProject>(response.getWriter())
    			.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
    			.withSeparator(CSVWriter.DEFAULT_SEPARATOR)
    			.withOrderedResults(false)
    			.build();
    	
    	writer.write(projectService.findAll());
    }

}
