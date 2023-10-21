package ro.f1.backend.core;

import org.springframework.stereotype.Service;
import ro.f1.backend.Controllers.ProductController;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Repositories.ProductRepository;

@Service
public class ProductAdminService {


    private final ProductRepository productRepository;

    public ProductAdminService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

  /*  public String addProduct(Product product){
        System.out.println("IN appUserService" + product);
        productRepository.save(product);
        return "SUCCESS";
    } */
}
