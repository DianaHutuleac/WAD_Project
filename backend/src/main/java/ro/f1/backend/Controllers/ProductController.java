package ro.f1.backend.Controllers;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Services.ProductService;

//import javax.servlet.http.HttpServletRequest;
import java.util.*;
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

    @GetMapping( path = "product/{id}")
    public ResponseEntity<Optional> getProductById(@PathVariable Long id){
        return new ResponseEntity<>(productService.getProduct(id), HttpStatus.OK);
    }

    @GetMapping(path = "getAllProducts")
    public HashMap<String, Object> getProductsAll(){
        HashMap<String, Object> hs = new HashMap<>();
        List<Product> products = productService.getProductsAll();
        hs.put("products", products);
        hs.put("length" , products.size());
        return hs;
    }


    @GetMapping( path = "teams")
    public HashMap<String, Object> getProductsByTeamName(@RequestParam(name = "team") String team){
        HashMap<String, Object> hs = new HashMap<>();
        List<Product> products = productService.getProductsByTeamName(team);
        hs.put("products", products);
        hs.put("length" , products.size());
        return hs;

    }

    @PostMapping(path = "addItem")
    public ResponseEntity<String> add(@RequestBody Product addProductRequest){
        return  new ResponseEntity<String>(productService.add(addProductRequest), HttpStatus.OK);
    }





}