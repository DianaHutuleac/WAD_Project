package ro.f1.backend.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ro.f1.backend.Models.AppUserRole;
import ro.f1.backend.Models.ApplicationUser;
import ro.f1.backend.Models.RegistrationRequest;
import ro.f1.backend.auth.AppUserService;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;
    public String register(RegistrationRequest request) {
        return appUserService.signupUser( new ApplicationUser(
                request.getFirstName(),
                request.getLastName(),
                request.getUserName(),
                request.getPassword(),
                request.getEmail(),
                AppUserRole.USER
        ));

    }
}
