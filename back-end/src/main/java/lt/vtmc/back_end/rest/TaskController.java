package lt.vtmc.back_end.rest;

import java.util.List;

import javax.validation.Valid;

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

import lt.vtmc.back_end.domain.Task;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.service.TaskService;


@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/tasks", produces = MediaType.APPLICATION_JSON_VALUE)
public class TaskController {

    private final TaskService taskService;

    public TaskController(final TaskService taskService) {
        this.taskService = taskService;
    }

//    @GetMapping
//    public ResponseEntity<List<Task>> getAllTasks() {
//        return ResponseEntity.ok(taskService.findAll());
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable final Long id) {
        return ResponseEntity.ok(taskService.get(id));
    }

//    @PostMapping
//    public ResponseEntity<Long> createTask(@RequestBody @Valid final TaskDTO taskDTO) {
//        return new ResponseEntity<>(taskService.create(taskDTO), HttpStatus.CREATED);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateTask(@PathVariable final Long id,
            @RequestBody @Valid final TaskDTO taskDTO) {
        taskService.update(id, taskDTO);
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/{id}/status")
    public ResponseEntity<Void> updateTaskStatus(@PathVariable final Long id, 
    		@RequestParam final String status) {
        taskService.updateStatus(id, status);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable final Long id) {
        taskService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
