function lengthArr(arr) {

    

    let sum1 = arr[0].length;
    let sum2 = arr[1].length;
    let sum3 = arr[2].length;
    let allSum = (sum1 + sum2 + sum3);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum +=i;
     
        
    }
    
    let result = Math.floor((allSum / sum));
    console.log(allSum);
    console.log(result);
    
}

lengthArr(['pasta','5','22.3']);
