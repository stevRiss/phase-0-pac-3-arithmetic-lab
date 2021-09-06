function add(a, b){
    const plus = a += b;
    return plus;
}

function subtract(a, b){
    const sub = a -= b;
    return sub;
}

function multiply(a, b){
    const mult = a *=  b;
    return mult;
}

function divide(a, b){
    const div = a /= b;
    return div;
}

function increment(n){
    let number =n; 
    number++;
    return number;
}

function decrement(n){
    let numb = n;
    numb--;
    return numb;
}

function makeInt(n){
    const int = parseInt(n, 10);
    return int;

}
makeInt("0x2328");

function preserveDecimal(n){
    
    
    return parseFloat(n);
}
preserveDecimal('2.222')
