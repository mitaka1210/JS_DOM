function mathOperation(a,b,c) {
    
    if (c === '+') {
       let result = a + b;
        console.log(result);
    }
    else if (c === '-'){
        let result = a - b;
        console.log(result);
    }
    else if (c === '*') {
        let result = a * b;
        console.log(result);
    }
    else if (c === '/') {
        let result = a / b;
        console.log(result);
    }
    else if (c === '%') {
        let result = a % b;
        console.log(result);
    }
    else if (c === '**') {
        let result = a ** b;
        console.log(result);
    }

}
mathOperation(10,6,'%');
