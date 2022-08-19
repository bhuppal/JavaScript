
const currentDate = new Date();

console.log(currentDate);

let startTime = "9:00";

let hrs = [9, 10, 11, 12];
let mins = [10, 20, 30, 40, 50];

hrs.map((h) => {
  return  mins.map((m) => {
        console.log(h,m); 
     
  })
})