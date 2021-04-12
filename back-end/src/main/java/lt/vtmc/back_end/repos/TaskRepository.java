package lt.vtmc.back_end.repos;

import lt.vtmc.back_end.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TaskRepository extends JpaRepository<Task, Long> {
}
