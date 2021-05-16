package lt.vtmc.back_end.repos;

import lt.vtmc.back_end.domain.Project;
import lt.vtmc.back_end.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TaskRepository extends JpaRepository<Task, Long> {
	
	List<Task> findByProjectTask(Project project);
	
}
