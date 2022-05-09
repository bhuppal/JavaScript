const transaction = require('./transactions.json');

/*
 {
      "itemId": 72061,
      "transactionId": 5301140,
      "amount": 91.47,
      "discountCode": null,
      "transactionDate": "2021-03-30T20:56:01.402Z"
    },
*/

const s = new Date("2021-03-30T20:56:01.402Z").getUTCMonth()+1;
console.log("Date", s);

const calculateRevenue = () => { 
    let totalRevenue = 0;
    transaction.forEach((item) => {
        const transactionMonth = (new Date(item.transactionDate).getMonth() +1) === 3 ? 3 : undefined;
        const transactionYear = (new Date(item.transactionDate).getUTCFullYear()) === 2021 ? 2021 : undefined;
        //console.log(transactionMonth);
        //console.log(transactionYear);
        if(transactionMonth === 3 && transactionYear === 2021) {
            totalRevenue += item.amount;
        }
    });
    return totalRevenue;
}

const result  = calculateRevenue();
console.log(result);