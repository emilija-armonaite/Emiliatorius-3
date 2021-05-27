package lt.vtmc.back_end;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import lt.vtmc.back_end.model.ProjectDTO;
import lt.vtmc.back_end.model.ReturnProject;
import lt.vtmc.back_end.model.TaskDTO;
import lt.vtmc.back_end.model.UserDTO;
import lt.vtmc.back_end.service.ProjectService;
import lt.vtmc.back_end.service.TaskService;
import lt.vtmc.back_end.service.UserService;

@Component
public class ApplicationRunner implements org.springframework.boot.ApplicationRunner {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private TaskService taskService;
	
	private final Logger log = LoggerFactory.getLogger(ApplicationRunner.class);

	@Override
	public void run(ApplicationArguments args) throws Exception {
		log.trace("Entering method run");

		List<String> projectNames = List.of("exotic measure", "trashy sign", "agile quartz", "exclusive hook",
				"macabre turkey", "cool toy", "overrated structure", "loving cobweb", "fast week",
				"serene paper", "toothsome taste", "moaning cows", "deserted roll", "golden bait",
				"psychedelic jar", "taboo building", "magical marble", "arrogant honey", "cozy dirt",
				"animated tin", "grieving oven", "elastic space", "axiomatic minister", "nonchalant dad",
				"shrill brother", "measly sneeze", "unique touch", "dramatic bat", "ready verse",
				"warm punishment", "halting ink", "decorous country", "flying burst", "rural quince",
				"irritating drawer", "nonchalant knife", "purple trick", "heavy brick", "aware eggs",
				"magical level", "wise frog", "giddy apparatus", "grieving touch", "closed toad",
				"thinkable snail", "befitting baseball", "khaki room", "novel birthday", "zealous foot",
				"longing cough", "full balance", "assorted tin", "humorous milk", "high match",
				"ablaze mailbox", "end army", "faithful pest", "crazy elbow", "frightened look",
				"stark sock", "trusty key", "daily relation", "pushy lettuce", "erratic existence",
				"sick donkey", "encouraging week", "important bit", "filthy hole", "powerful zoo",
				"indigo circle", "lazy bear", "questionable horse", "loud carriage", "grumpy tendency",
				"tame geese", "standing collar", "wary giants", "composed sticks", "gentle verse", "huge show",
				"dry birth", "snowy icicle", "mere oil", "useful sidewalk", "third sheep", "famous dress",
				"sneaky snakes", "aspiring plough", "typical boot", "abashed appliance", "perpetual cannon",
				"harmonious oranges", "fair visitor", "concerned tank", "trite fireman", "rapid harmony",
				"kindhearted parcel", "serene jump", "enigmatic debt", "acceptable zebra");

		List<String> taskNames = List.of("Learn all the Constellations", "See the Pyramids", "Learn a Hilarious Phrase in 10 Languages",
				"Drink Rum on a Caribbean Beach");

		log.debug("Creating first admin user");
		UserDTO user = new UserDTO("admin@mail.com", "password");
		userService.create(user);

		log.debug("Creating projects with tasks");
		for (String name : projectNames){
			ProjectDTO p = new ProjectDTO(name, "Description that says a lot about this important project.");
			projectService.create(p);
		}

		List<ReturnProject> projects = projectService.findAll();
		for (ReturnProject p : projects) {
			for(String name : taskNames) {
				TaskDTO t = new TaskDTO(name, "A very detailed user story for this important task.", "MEDIUM");
				taskService.create(p.getId(), t);
			}
		}
		
	}

}
