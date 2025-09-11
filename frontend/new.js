let num;
num=5;
let fact=1;
let i=1;
for(i=1; i<=num; i++){
    fact=fact*i;
 }
console.log(fact)

//function cal

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b)
{
    if(b===0){
        return "error:cannot divide by zero!";
    }
    return(a/b);
}
console.log(add(5,6))
console.log(sub)


//simple interest
let p,t,r;
p=100000;
t=12;
r=2;
let si;
si=(p*t*r)/100;
console.log(si)

//compound interset
function cmin(p,t,r,n){
    return (p*(1+r/n)^(n*t));
}
console.log(cmin(100000,3,2,4))




//usinig if condition cal
let a=9;
let b=4;







//grade conditions
let marks=37;
if(marks!=0 && marks>100)
    console.log("do not have grade")
else if(marks>=90 &&marks<=100)
    console.log("good")
else if(marks>=80 && marks<=90)
    console.log("better")
else if(marks>=60 && marks<=80)
    console.log("best of luck")
else
    console.log("poor")


//distance
function calculateDistance(totalMinutes, initialSpeed, maxSpeed) {
    let speed = initialSpeed;
    let distance = 0;
    let timeRemaining = totalMinutes;

    while (timeRemaining > 0) {
        let segmentTime = Math.min(10, timeRemaining);
        distance += speed * (segmentTime / 60);
        timeRemaining -= segmentTime;

        // Double speed but cap at maxSpeed
        speed = Math.min(speed * 2, maxSpeed);
    }

    return distance;
}

const totalTime = 96; // in minutes
const initialSpeed = 30; // km/h
const maxSpeed = 120; // km/h

const distance = calculateDistance(totalTime, initialSpeed, maxSpeed);
console.log(`Distance traveled: ${distance.toFixed(2)} km`);





//a>>b
//sp=30kmph
//every 10 sp=sp*2
//max speed=120
//he travelled for 96 totalMinutes


//code
let speed=30;
let distance=0;
for(i=10;i<=90;i+10)
{
    distance=distance+speed/6;
    if(speed>120){

    
        speed=speed*2;
}
}
distance=distance+speed/10;
console.log(distancenode)