package ro.f1.backend.Controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.f1.backend.Models.RegistrationRequest;
import ro.f1.backend.Services.RegistrationService;

@RestController
@RequestMapping(path = "api/register")
@AllArgsConstructor
public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request ){
        return  new ResponseEntity<String>(registrationService.register(request), HttpStatus.OK);
    }

}