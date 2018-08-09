// use of while to find out how many time we can exponentionaly grow 2.1
// to get to 567
var i = 1;
var reps = 0;

while (i < 567) {
  ++reps;
  console.log(reps + " reps give us " + i);
  i*= 2.1;
}

// to ensure the loop run at least once we use the do while loop
do {
  ++reps;
  console.log(reps + " reps give us " + i);
  i*= 2.1;
} while (i < 567);
