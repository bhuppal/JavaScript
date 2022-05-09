//function statement
/*

function greet() {
    console.log('hi');
};
greet();

//function are first-class
function logGreeting(fn) {
    fn();
    console.log('calling another function');
}

console.log(logGreeting(greet));


const sixMonthDate = new Date(Date.now());
sixMonthDate.setMonth(sixMonthDate.getMonth() - 6);

console.log(sixMonthDate);

let months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
const todate = new Date();
const currentMonth = today.getMonth();
let result = [];

/*


var i;
for (i=0; i<12; i++) {
    console.log(theMonths[aMonth] + " " + today.getFullYear()); //here you can do whatever you want...
    aMonth++;
    if (aMonth > 11) {
        aMonth = 0;
    }
}
*/
//let theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
const getDateFutureMonthYear = NoOfMonths => {
    try{
    let now = new Date();
    let currentMonth = now.getMonth();
    let cnt = NoOfMonths;
    let result = [];    
while(cnt>0) {    
    now.setMonth(++currentMonth);
    cnt--;
    if(currentMonth > 11) {
        currentMonth = 0;        
        now.setFullYear(now.getFullYear());
    }
  result.unshift(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear()));
}
    return result;
} catch(e) {
    console.log("Error: " + e);
}
}


const getDateCurrentMonthYear = () => {
    let result = [];  
    let now = new Date();
    result.push(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear()));
    return result;
}
const getDatePastMonthYear = NoOfMonths => {
    try{
    let now = new Date();
    let currentMonth = now.getMonth();
    let cnt = NoOfMonths;
    let result = [];    
while(cnt>0) {    
    now.setMonth(--currentMonth);
    cnt--;
    if(currentMonth < 0) {
        currentMonth = 11;        
        now.setFullYear(now.getFullYear());
    }
  result.push(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear()));
}
    return result;
} catch(e) {
    console.log("Error: " + e);
}
}


//let data = [getDateFutureMonthYear(6)];
let data = [...getDateFutureMonthYear(12),  
    ...getDateCurrentMonthYear(),...getDatePastMonthYear(12)];

    for(let v of data) {
        console.log(v);
    }

/*
let now = new Date();
let currentMonth = now.getMonth();
let cnt = 11;
let result = [];

//Getting the future
while(cnt>0) {    
    now.setMonth(++currentMonth);
    cnt--;
    if(currentMonth > 11) {
        currentMonth = 0;        
        now.setFullYear(now.getFullYear());
    }
  result.unshift(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear()));
}
currentMonth = now.getMonth() + 1;
cnt = 11;
now.setFullYear(now.getFullYear()-1);
while(cnt>0) {
    now.setMonth(currentMonth--);  
    if(currentMonth < 0) {
        currentMonth = 11;  
        now.setFullYear(now.getFullYear()-1);       
    }    
    
    if()
    result.push(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear())); 
    
    cnt--; 
}

for(let m of result) {
    console.log(m);
}
//console.log(result);
/*
//Getting the cuurent and past
while(cnt>0) {    
    result.unshift(now.toLocaleString('default', { month: 'long' })  + " " +(now.getFullYear()));
    now.setMonth(++currentMonth);
    cnt--;
    if(currentMonth > 11) {
        currentMonth = 0;
    }
    
}
console.log(result);
/*
while(cnt>0) {    
    console.log(theMonths[currentMonth++] + " " + now.getFullYear());    
    //currentMonth++;
    cnt--;
    if(currentMonth > 11 ) {
        currentMonth = 0;
    }
}
*/
/*
for (var i = 0; i < 12; i++) {
  var future = new Date(now.getFullYear(), now.getMonth() + i, 1);
  var month = theMonths[future.getMonth()];
  var year = future.getFullYear();
  console.log(month, year);
}
*/







/*






const getDateFutureMonthYear = NoOfMonths => {
    try {
        let now = new Date();
        let currentMonth = now.getMonth();
        let cnt = NoOfMonths;
        let result = [];
        while (cnt > 0) {
            now.setMonth(++currentMonth);
            cnt--;
            if (currentMonth > 11) {
                currentMonth = 0;
                now.setFullYear(now.getFullYear());
            }
            result.unshift(now.toLocaleString('default', { month: 'long' }) + " " + (now.getFullYear()));
        }
        return result;
    } catch (e) {
        console.log("Error: " + e);
    }
}


const getDateCurrentMonthYear = () => {
    try {
        let result = [];
        let now = new Date();
        result.push(now.toLocaleString('default', { month: 'long' }) + " " + (now.getFullYear()));
        return result;
    } catch (e) {
        console.log("Error: " + e);
    }
}
const getDatePastMonthYear = NoOfMonths => {
    try {
        let now = new Date();
        let currentMonth = now.getMonth();
        let cnt = NoOfMonths;
        let result = [];
        while (cnt > 0) {
            now.setMonth(--currentMonth);
            cnt--;
            if (currentMonth < 0) {
                currentMonth = 11;
                now.setFullYear(now.getFullYear());
            }
            result.push(now.toLocaleString('default', { month: 'long' }) + " " + (now.getFullYear()));
        }
        return result;
    } catch (e) {
        console.log("Error: " + e);
    }
}
let data = [...getDateFutureMonthYear(11),
            ...getDateCurrentMonthYear(), 
            ...getDatePastMonthYear(11)];

for (let v of data) {
    console.log(v);
}

*/

      let getLocationById = {
        "id": "108086",
        "name": "Vestar",
        "address": {
          "id": "793354",
          "city": "Phoenix",
          "postcode": "850164200",
          "state": "AZ",
          "streetName": "Camelback",
          "streetNumber": "2425",
          "streetSuffix": null,
          "streetType": "Rd"
        },
        "locationProfile": {
          "logo": "https://ahdev1cdn.csgpimgs.com/i2/QNI8qBRd2R1yhAdpJkOSFpRCcdXlZxXfxd8palCad38/110/photo.jpg"
        }
      };
    

    let result = Object.entries(getLocationById)[0][1];
    console.log(Object.entries(getLocationById))
    