package ro.f1.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.f1.backend.Models.OrderItem;
import ro.f1.backend.Repositories.OrderRepository;

//import java.awt.print.Pageable;
import java.util.*;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public List<OrderItem> getOrdersAll( ) {
        return orderRepository.findAll();
        //return null;
    }

    public Optional<OrderItem> getOrder(Long id ) {
        return orderRepository.findById(id);
        //return null;
    }

    public String add(OrderItem order){
        System.out.println("IN appUserService" + order);
        orderRepository.save(order);
        return "SUCCESS";
    }
}
