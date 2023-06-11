package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Table(name="foods")
@Entity(name = "EntidadeFoods")

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Food {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String image;
    private Integer price;

    public Food(FoodRequestDTO data ){
        this.price = data.price();
        this.title = data.title();
        this.image = data.image();
    }

}
