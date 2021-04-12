package lt.vtmc.back_end.model;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class TaskDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String name;

    @NotNull
    @Size(max = 255)
    private String userStory;

    @NotNull
    @Size(max = 255)
    private String priority;

    @NotNull
    @Size(max = 255)
    private String status;

    private LocalDateTime creationDate;

    private LocalDateTime updateDate;

    private Long projectTask;

}
