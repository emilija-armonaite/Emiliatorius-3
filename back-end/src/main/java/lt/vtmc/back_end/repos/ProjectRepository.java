package lt.vtmc.back_end.repos;

import lt.vtmc.back_end.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProjectRepository extends JpaRepository<Project, Long> {
}
