package ro.f1.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import ro.f1.backend.Controllers.ProductController;
import ro.f1.backend.Models.AppUserRole;
import ro.f1.backend.Models.ApplicationUser;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Repositories.ProductRepository;
import ro.f1.backend.core.ProductAdminService;

//import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class ProductService {

    private final ProductRepository productRepository;


    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }


    public List<Product> getProductsByClothesType(String merch) {
        return productRepository.findProductsByB_Clothestype(merch);
        //return null;
    }

    public HashMap<String, Object> getProductsByTeam(String team, Integer pageSize, Integer page, Map<Boolean, Long> countByType) {

        Pageable paging = (Pageable) PageRequest.of(page, pageSize);
        Page<Product> prods = productRepository.findProductByA_team(team, (Pageable) paging);
        List<Product> newProds = productRepository.findProductsByF_arrivalAndA_team("new", team);
        Integer totalPages = prods.getTotalPages();
        List<Product> products = prods.getContent();
        products = rearrange(products, countByType, newProds);
        Integer current = page;
        HashMap<String, Object> hs = new HashMap<>();
        hs.put("current", current);
        hs.put("products", products);
        hs.put("total", totalPages);
        
        return hs;
    }

    private List<Product> rearrange(List<Product> products, Map<Boolean, Long> countByType, List<Product> newProds) {
        List<Product> ll = new ArrayList<>(products);
        Product ptemp = ll.get(0);
        ll.remove(ptemp);
        ll.add(0, newProds.get(0));

        if( (long)(countByType.get(true) + countByType.get(false)) == 0){
            return ll;
        }

        Integer toShift =
                (int)(long)( (double) countByType.get(false) / (countByType.get(true) + countByType.get(false)) * products.size());

        System.out.println("toShift" + toShift);
        int pivot = Math.max(0, (int) (Math.random() * 50) - 5);

        for(int start = 0; start < Math.min(Math.min(Math.min(products.size(), toShift), newProds.size()),7); start++){
            Product p = ll.get(start);
            ll.remove(p);
            ll.add(0, newProds.get(start + pivot));
        }
        return ll;
    }
    public String add(Product product){
        System.out.println("IN appUserService" + product);
        productRepository.save(product);
        return "SUCCESS";
    }
}
