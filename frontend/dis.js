function calculate(distance) {
  let fare = 0;

  if (distance <= 4) {
    fare = 30;
  } else if (distance <= 9) {
    fare = 30 + (distance - 4) * 10;
  } else if (distance <= 19) {
    fare = 30 + (5 * 10) + (distance - 9) * 15;
  } else {
    fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
  }
  return fare;
}

// Example usage:
const totalFare = calculate(19.5);
console.log(totalFare)







//while loop
let i=0;
while(i<3){
    console.log(i)
    i++;
}





//5 table using while loop
let i=1;
let num=5;
while(i<=10){
    if(num*i){
        console.log(i)
        i++;
    }
    }
