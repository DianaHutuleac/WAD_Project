package ro.f1.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.f1.backend.Models.ShoppingCart;

import java.util.Optional;

public interface CartRepository extends JpaRepository<ShoppingCart, Long> {

    public Optional<ShoppingCart> findByUserId(String user_email);
}