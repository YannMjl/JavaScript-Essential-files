function myfunction() {
  console.log("Hello");
}

console.log("Hello World");

var date = new Date();
document.body.innerHTML = "<h1> Today's day is " + (date.getMonth() + 1) + "/" +
  date.getDate() + "/" + date.getFullYear() + "</h1>";
