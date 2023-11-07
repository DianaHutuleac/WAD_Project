package ro.f1.backend.Controllers;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ro.f1.backend.Models.OrderItem;
import ro.f1.backend.Services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


//import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping(path = "api/v1/")
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping(path = "getAllOrders")
    public HashMap<String, Object> getOrdersAll(){
        HashMap<String, Object> hs = new HashMap<>();
        List<OrderItem> orders = orderService.getOrdersAll();
        hs.put("orders", orders);
        hs.put("length" , orders.size());
        return hs;
    }

    @PostMapping(path = "addOrder")
    public ResponseEntity<String> add(@RequestBody OrderItem addOrderRequest){
        return  new ResponseEntity<String>(orderService.add(addOrderRequest), HttpStatus.OK);
    }
}
