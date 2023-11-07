package ro.f1.backend.Models;
import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.flamup.spring.DTO.OrderDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnTransformer;
import org.hibernate.annotations.Type;

//import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;




@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderItem {

    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    private Long id;



    //@Enumerated(EnumType.STRING)

    @Column(name = "firstName")
    String firstName;
    @Column(name = "lastName")
    String lastName;
    @Column(name = "email")
    String email;
    @Column(name = "address")
    String address;
    @Column(name = "city")
    String city;
    @Column(name = "country")
    String country;
    @Column(name = "state")
    String state;
    @Column(name = "postCode")
    String postCode;
    @Column(name = "phone")
    String phone;
    @Column(name = "deliveryMeth")
    String deliveryMeth;
    @Column(name = "cardNo")
    String cardNo;
    @Column(name = "cardName")
    String cardName;
    @Column(name = "expDate")
    String expDate;
    @Column(name = "cvc")
    String cvc;

    @Column(name = "products", columnDefinition = "JSON")
    @ColumnTransformer(write = "?::jsonb")
    private String products;

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDeliveryMeth() {
        return deliveryMeth;
    }

    public void setDeliveryMeth(String deliveryMeth) {
        this.deliveryMeth = deliveryMeth;
    }

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getExpDate() {
        return expDate;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

}
