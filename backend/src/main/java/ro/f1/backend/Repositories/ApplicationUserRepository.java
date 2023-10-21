package ro.f1.backend.Repositories;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.f1.backend.Models.ApplicationUser;

import java.util.Optional;

@Repository
@Transactional
public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {

    Optional<ApplicationUser> findApplicationUsersByEmail(String email);

}