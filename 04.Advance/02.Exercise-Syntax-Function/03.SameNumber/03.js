function solve(a,b) {
    
    let sum = 0;

    while (a < b) {
        if (a < b ){
             b = b - a;
            console.log(a);
            sum+=a;
        }
        else {
            console.log(b);
        }
        
    }
}
solve(6, 10);
