package ro.f1.backend.Models;
import jakarta.persistence.*;
import lombok.*;

//import javax.persistence.*;

@Entity
@Table(name = "clothes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Product {

    public enum team{
        REDBULL,
        MERCEDES,
        FERRARI,
        ASTONMARTIN,
        MCLAREN,
        ALPINE,
        WILLIAMS,
        HAAS,
        ALFAROMEO,
        ALPHATAURI

    }



    @Id
    Long id;
    @Enumerated(EnumType.STRING)

    @Column(name = "team")
    team a_team;
    @Column(name = "clothestype")
    String b_clothestype;
    @Column(name = "size")
    String c_size;
    @Column(name = "image")
    String d_image;
    @Column(name = "price")
    String e_price;
    @Column(name = "arrival")
    String f_arrival;

    public Product( team a_team, String b_clothestype, String c_size, String d_image, String e_price, String f_arrival) {
        this.a_team = a_team;
        this.b_clothestype = b_clothestype;
        this.c_size = c_size;
        this.d_image = d_image;
        this.e_price = e_price;
        this.f_arrival = f_arrival;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public team getA_team() {
        return a_team;
    }

    public void setA_team(team a_team) {
        this.a_team = a_team;
    }

    public String getB_clothestype() {
        return b_clothestype;
    }

    public void setB_clothestype(String b_clothestype) {
        this.b_clothestype = b_clothestype;
    }

    public String getC_size() {
        return c_size;
    }

    public void setC_size(String c_size) {
        this.c_size = c_size;
    }

    public String getD_image() {
        return d_image;
    }

    public void setD_image(String d_image) {
        this.d_image = d_image;
    }

    public String getE_price() {
        return e_price;
    }

    public void setE_price(String e_price) {
        this.e_price = e_price;
    }

    public String getF_arrival() {
        return f_arrival;
    }

    public void setF_arrival(String f_arrival) {
        this.f_arrival = f_arrival;
    }
}
