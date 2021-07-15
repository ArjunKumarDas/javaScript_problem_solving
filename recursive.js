// A recursive function is a function that calls itself until it doesn’t
// A recursive function always has a condition that stops the function from calling itself.


function factorial (num){
    var fact = 1;
 for (var i = 1; i <= num; i++){
     fact = fact * i;
 }
 return fact;
}

var result = factorial(5);
console.log(result);

//Recussive 

function factRecursive(num){
    if (num == 1){
        return 1;
    }else{
        return num * factRecursive(num-1);
    }
}

var result = factRecursive(5);
console.log(result);