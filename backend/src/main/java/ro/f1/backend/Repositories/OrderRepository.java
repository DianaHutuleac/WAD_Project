package ro.f1.backend.Repositories;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.f1.backend.Models.OrderItem;
import java.util.List;
import java.util.Optional;
@Repository
@Transactional
public interface OrderRepository extends JpaRepository<OrderItem, Long> {


    public Optional<OrderItem> findById(Long id);
}