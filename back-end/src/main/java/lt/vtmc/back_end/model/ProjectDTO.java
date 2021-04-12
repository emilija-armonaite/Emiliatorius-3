package lt.vtmc.back_end.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ProjectDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String description;

    @Size(max = 255)
    private String status;

    private Integer tasksAmount;

    private Integer tasksLeft;

    @NotNull
    private Long userProject;

}
