
function animalCount(depth){
var animal = 0;
if(depth <=10) {
    animal = depth * 50;

}else if(depth <= 20){
    var fristPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = fristPart + secondPart;
} else{
    var fristPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = fristPart + secondPart + thirdPart;
}
return animal;
}
var count = animalCount(11)
console.log(count); 