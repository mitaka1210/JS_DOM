function circleArea(num) {

    if (Number.isInteger(num)) {
        let result  = Math.PI*(num**2);
        console.log(result.toFixed(2));
    }
    else {
        let a = typeof num;

        console.log(`We can not calculate the circle area, because we receive a ${a}.`);
    }

}
circleArea('5');
