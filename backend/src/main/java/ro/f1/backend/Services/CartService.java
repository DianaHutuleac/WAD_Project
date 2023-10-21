package ro.f1.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import ro.f1.backend.DTO.OrderDTO;
import ro.f1.backend.DTO.UpdateOrderDTO;
import ro.f1.backend.Models.OrderItem;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Models.ShoppingCart;
import ro.f1.backend.Repositories.CartRepository;
import ro.f1.backend.Repositories.OrderRepository;
import ro.f1.backend.Repositories.ProductRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;


    @Autowired
    public CartService(CartRepository cartRepository,
                       ProductRepository productRepository,
                       OrderRepository orderRepository
    ) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    public String addToCart(OrderDTO order){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ( principal instanceof UserDetails) {

            Optional<ShoppingCart> cartFromRepo = cartRepository.findByUserId(((UserDetails) principal).getUsername());
            ShoppingCart cart;
            if ( ! cartFromRepo.isPresent() ){
                cart = new ShoppingCart();
                cart.setUserId(((UserDetails) principal).getUsername());
                cartRepository.save(cart);
            }
            else{
                cart = cartFromRepo.get();
            }

            OrderItem item = new OrderItem();
            Product pt = productRepository.findProductById(order.getProductId())
                    .orElseThrow( () -> new IllegalStateException("product not found"));
            item.fromDto(pt, cart, order.getQuantity());

            orderRepository.save(item);
            return "SUCCESS";
        }
        else{
            throw  new IllegalStateException("user not authenticated");
        }
    }


    private Integer sanitizePrice( String price) {
        // price with Rs.2,244 --> 2244
        price  = price.substring(3).replace(",", "");
        return Integer.parseInt(price);
    }



    public HashMap<String, Object> getProducts() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        HashMap<String, Object> hs = new HashMap<>();
        hs.put("products", new ArrayList<>());
        hs.put("total", 0);

        if (principal instanceof UserDetails) {
            Optional<ShoppingCart> cartFromRepo = cartRepository.findByUserId(((UserDetails) principal).getUsername());

            if (!cartFromRepo.isPresent()) {
                return hs;
            }

            ShoppingCart cart = cartFromRepo.get();
            ArrayList<OrderItem> orders = new ArrayList<>(orderRepository.findByCart_Id(cart.getId()));

            int total = 0;

            for (OrderItem order : orders) {
                int itemPrice = sanitizePrice(order.getProduct().getE_price());
                total += order.getQuantity() * itemPrice;
            }

            hs.put("products", orders);
            hs.put("total", total);

            return hs;
        } else {
            throw new IllegalStateException("User not authenticated");
        }
    }




    public String updateOrder(UpdateOrderDTO updateOrderDTO){
        OrderItem item = orderRepository.findById(updateOrderDTO.getId())
                .orElseThrow(()->new IllegalStateException("order does not exist"));

        item.setQuantity(updateOrderDTO.getQuantity());
        orderRepository.save(item);
        return "SUCCESS";
    }


    public String deleteOrder( String id){
        OrderItem item = orderRepository.findById(id)
                .orElseThrow(()->new IllegalStateException("order does not exist"));
        orderRepository.delete(item);
        return "DELETED";
    }


}
