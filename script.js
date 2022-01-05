// Dojo Pizzeria Assignment

function pizzaOver(crustType, sauceType, cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOver("deep dish", "traditional", ["mozzarella"], ["peperoni", "sausage"]);
var pizza2 = pizzaOver("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOver("flat", "traditional", ["mozzarella"], ["peperoni", "jalapenos"]);
var pizza4 = pizzaOver("super deep dish", "traditional", ["mozzarella"], ["peperoni", "pineapple", "ham"]);

function randomPizza(){
    var pizzas = [pizza1, pizza2, pizza3, pizza4];
    var random = Math.floor(Math.random() * pizzas.length);
    return pizzas[random];
};
randomPizza();