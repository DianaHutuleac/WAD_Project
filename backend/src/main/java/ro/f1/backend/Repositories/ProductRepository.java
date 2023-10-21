package ro.f1.backend.Repositories;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import ro.f1.backend.Models.Product;

//import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findProductById( Long id);


    @Query("select p from Product p where LOWER(p.b_clothestype) LIKE LOWER(CONCAT('%',:type,'%'))")
    List<Product> findProductsByB_Clothestype(@Param("type") String type);

    @Query(value = "select p from Product p where LOWER(p.a_team)=lower(:team) order by p.f_arrival desc")
    Page<Product> findProductByA_team(@Param("team") String team, Pageable paging);

    @Query(value = "select p from Product p where LOWER(p.f_arrival)=LOWER(:arrival) and LOWER(p.a_team)=LOWER(:team)")
    List<Product> findProductsByF_arrivalAndA_team(@Param("arrival") String arrival, @Param("team") String team);

}
