function friutPrice(fruit,gramms,price) {
    
    let money = ((gramms / 1000) * price).toFixed(2);

    console.log(`I need $${money} to buy ${(gramms / 1000).toFixed(2)} kilograms ${fruit}.`);

}

friutPrice('orange', 2500, 1.80);
