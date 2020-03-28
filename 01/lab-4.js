// function bigNumber(x, y, z ) {
//     let num1 = x;
//     let num2 = y;
//     let num3 = z;


//     let result = 0;

//     if (num1 > num2 && num1 > num3) {
//         result = num1;
//     }
//     else if ( num2 > num1 && num2 > num3 )  {
//         result = num2;
        
//     }

//     else if (num3 > num1 && num3 > num2 ){
//         result = num3;
//     }

//     return(`The largest number is ${result}.`);
// }

// console.log(bigNumber(5, -3, 16));

// ? ...params това е равно на a, b, c и на мястото на a,b,c поставяме ...paramas и така нямаме проблем колко числа ще ни подадат.



function solve(...paramas ) {

    return `The largest number is ${ [...paramas]
        .sort((a, b) => a - b ).pop()}.`
    
}

console.log(solve(-5, 3, 16, 7,-100, 50));
