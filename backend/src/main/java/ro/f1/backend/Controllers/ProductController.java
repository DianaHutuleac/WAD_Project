package ro.f1.backend.Controllers;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Services.ProductService;

//import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "api/v1/")
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping(path = "clothes")
    public HashMap<String, Object> getProductsByClothesTypeOnSearch(@RequestParam(name = "merch") String merch){
        HashMap<String, Object> hs = new HashMap<>();
        List<Product> products = productService.getProductsByClothesType(merch);
        hs.put("products", products);
        hs.put("length" , products.size());
        return hs;
    }


    @GetMapping( path = "teams")
    public HashMap<String, Object> getProductsByTeamAndSession(
            @RequestParam(name = "team") String team,
            @RequestParam(defaultValue = "10") Integer items,
            @RequestParam(defaultValue = "0") Integer page,
            HttpServletRequest request){

        List<String> messages = (List<String>) request.getSession().getAttribute("SESSION_STORE");

        if ( messages == null){
            messages = new ArrayList<>();
        }

        Map<Boolean, Long> countByType = messages.stream().collect(
                Collectors.partitioningBy(
                        (String msg) -> (msg.equals("O")), Collectors.counting() ));

        return productService.getProductsByTeam(team,  items, page, countByType);

    }

    @PostMapping(path = "addItem")
    public ResponseEntity<String> add(@RequestBody Product addProductRequest){
        return  new ResponseEntity<String>(productService.add(addProductRequest), HttpStatus.OK);
    }


}