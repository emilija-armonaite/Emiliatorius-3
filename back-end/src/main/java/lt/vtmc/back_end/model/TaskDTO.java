package lt.vtmc.back_end.model;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lt.vtmc.back_end.domain.Project;

@Getter
@Setter
public class TaskDTO {

    @NotNull
    @Size(max = 255)
    private String name;

    @NotNull
    @Size(max = 255)
    private String userStory;


	public TaskDTO(String name, String userStory) {
		this.name = name;
		this.userStory = userStory;
	}

	public TaskDTO() {
	}
    
}
