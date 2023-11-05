package ro.f1.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.f1.backend.Models.Product;
import ro.f1.backend.Repositories.ProductRepository;

//import java.awt.print.Pageable;
import java.util.*;

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

    public List<Product> getProductsByTeamName(String team) {
        return productRepository.findProductsByA_team(team);
        //return null;
    }

    public List<Product> getProductsAll( ) {
        return productRepository.findAll();
        //return null;
    }

    public Optional<Product> getProduct(Long id ) {
        return productRepository.findById(id);
        //return null;
    }




    public String add(Product product){
        System.out.println("IN appUserService" + product);
        productRepository.save(product);
        return "SUCCESS";
    }
}
