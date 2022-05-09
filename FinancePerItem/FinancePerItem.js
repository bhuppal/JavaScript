/*
Return a single object
Each key in the object is the itemType
The value for each itemType is another object
The total revenue for that item type, named revenue
The total profit for that item type, named profit
*/

const inventory = require('./inventory.json');
const transaction = require('./transactions.json');

const financePerItem = () => {
    const result = {};
    inventory.forEach((item) => {
        let revenue = 0;
        let profit = 0;
        transaction.filter((t) => t.itemId == item.id).forEach((i) => {
            revenue += Number(i.amount);
            profit += Number(i.amount - item.cost);
        });
       if(!result[item.itemType]) {
           result[item.itemType] =  {"profit": profit, "revenue": revenue}
       } else {
           const currentProfit = result[item.itemType]["profit"] + profit;
           const currentRevenue = result[item.itemType]["revenue"] + revenue;
           result[item.itemType] = {"profit": currentProfit, "revenue": currentRevenue};
       }
    });
    return result;
}

const r = financePerItem();
console.log(r);