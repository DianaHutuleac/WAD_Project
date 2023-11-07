package ro.f1.backend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.f1.backend.Models.ApplicationUser;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Services.ProductService;
import ro.f1.backend.Services.UserService;

//import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "api/v1/")
@AllArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping(path = "getAllUsers")
    public HashMap<String, Object> getUsersAll(){
        HashMap<String, Object> hs = new HashMap<>();
        List<ApplicationUser> users = userService.getUsersAll();
        hs.put("products", users);
        hs.put("length" , users.size());
        return hs;
    }

}