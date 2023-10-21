package ro.f1.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.f1.backend.Models.OrderItem;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderItem, Long> {

    public List<OrderItem> findByCart_Id(Long cart_id);

    public Optional<OrderItem> findById(String id);
}