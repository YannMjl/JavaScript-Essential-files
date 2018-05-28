function myfunction() {
  console.log("Hello");
}

console.log("Hello World");

var date = new Date();
document.body.innerHTML = "<h1> Today's day is " + (date.getMonth() + 1) + "/" +
  date.getDate() + "/" + date.getFullYear() + "</h1>";

var a = 3;
var b = 5;
var sum = a + b;
var theNumbermatched;

var humanSum = "The value of a is: " + a + ". The value of b is: " + b +
  ". The Sum of a and b is equal to: " + sum + ".";

console.log(humanSum);

if (a == b) {
  theNumbermatched = true;
} else {
  theNumbermatched = false;
}

console.log('Do the numbers matched? ' + theNumbermatched);
