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
				"Drink Rum on a Caribbean Beach", "Go to China During Chinese New Year", "Hike the Entire Grand Enchantment Trail",
				"Build a Computer", "Learn to Hang Glide", "Cruise Mexico", "Make a Quilt", "Prove a Theory", "Hug a Baby Elephant",
				"Taste Stuffed Grape Leaves", "Wear a Classy Dress & Heels in Public", "Have a Facebook Account",
				"Make a 7Lb Cheese Burger", "Let Go of a Floating Lantern", "Walk Down a Red Carpet", "Go to all of the U.S. National Parks",
				"Run 135 Miles Across Death Valley Within 60 Hours", "Inspire Someone Else to Make a Bucket List", "Cover my Bedroom Walls With Lyrics",
				"Put my Mouth Under an Ice Cream Machine", "Live in a Completely Sustainable Way For a Year", "Own a Professional Football Team",
				"Fall in Love Accidentally", "Write a Song and Record It", "Learn How to Say Hello in 10 Languages", "Hit on a Stranger",
				"Learn to Drum Roll", "Meet a Millionaire", "Attend a Big Fashion Show", "Kiss a Stranger", "Go to a Jewish Wedding",
				"Eat Mexican Food in Mexico", "Go to a Hockey Game", "Help an Elderly Person With Their Bags", "Find a Cause That Will Be in my Heart Forever",
				"Learn How to Swim", "Go to a Boxing Match", "Build a Huge Lego Model", "Get a Lei in Hawaii", "Own a Bentley",
				"Try 50 Different Kinds of Beer", "Write a Book to Each of my Children", "Become a Kindergarten Teacher", "Play a New Sport For an Entire Season",
				"Kiss a Frog", "Work For Disney", "Have a Race on a Segway");

//		log.debug("Creating first admin user");
//		UserDTO user = new UserDTO("admin@mail.com", "password");
//		userService.create(user);
//
//		log.debug("Creating projects with tasks");
//		for (int i = 1; i <= 100; i++){
//			ProjectDTO p = new ProjectDTO("Project " + i, "Description that says a lot about this important project.");
//			projectService.create(p);
//		}

//		List<ReturnProject> projects = projectService.findAll();
//		for (ReturnProject p : projects) {
//			for(String name : taskNames) {
//				TaskDTO t = new TaskDTO(name, "A very detailed user story for this important task.", "MEDIUM");
//				taskService.create(p.getId(), t);
//			}
//		}
		
	}

}
