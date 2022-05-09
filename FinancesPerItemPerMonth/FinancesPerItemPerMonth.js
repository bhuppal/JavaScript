const inventory = require("./inventory.json");
const transactions = require("./transactions.json");

const financePerItemPerMonth = () => {
   const result = {}

    transactions.forEach((tran) =>{
        const item = inventory.find((i) => i.id === tran.itemId);
            if(!result[item.itemType]) {
                result[item.itemType] = {};

                for(let j=1; j<=12; j++) {
                    result[item.itemType][j] = {
                        profit:0,
                        revenue:0,
                    }
                }
                
            }

            let month = new Date(tran.transactionDate).getUTCMonth()+1;
                result[item.itemType][month].revenue += tran.amount;
                result[item.itemType][month].profit += tran.amount - item.cost;
    })
return result;

};

console.log(financePerItemPerMonth());