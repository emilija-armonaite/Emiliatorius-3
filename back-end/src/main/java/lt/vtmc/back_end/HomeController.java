package lt.vtmc.back_end;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {

    @GetMapping("/")
    public String welcome() {
        return "Hello";
    }

}


