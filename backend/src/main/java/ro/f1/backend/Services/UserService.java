package ro.f1.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.f1.backend.Models.ApplicationUser;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Repositories.ApplicationUserRepository;
import ro.f1.backend.Repositories.ProductRepository;

//import java.awt.print.Pageable;
import java.util.*;

@Service
public class UserService {

    private final ApplicationUserRepository applicationUserRepository;


    @Autowired
    public UserService(ApplicationUserRepository applicationUserRepository){
        this.applicationUserRepository = applicationUserRepository;
    }






    public List<ApplicationUser> getUsersAll( ) {
        return applicationUserRepository.findAll();
        //return null;
    }

}
