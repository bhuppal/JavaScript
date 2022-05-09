const inventory = require("./inventory.json");
const transactions = require("./transactions.json");

const lossItems = () => {
  

    const summedDiscountCodes = transactions.filter((t) => t.discountCode)
        .reduce((obj, t) => {
            if(!obj[t.discountCode]) {
                obj[t.discountCode] = 0;
            }
            obj[t.discountCode]++;
            return obj;
        }, {});
    //console.log(summedDiscountCodes);
    let max = 0;
    let discountCode = '';

    Object.keys(summedDiscountCodes).forEach((k) => {
        if(summedDiscountCodes[k] > max) {
            max = summedDiscountCodes[k];
            discountCode = k;
        }
    });

    //console.log(max, discountCode);

    const lossItems = transactions.filter(t => {
        const item = inventory.find((i) => i.id === t.itemId);
        return t.discountCode === discountCode && t.amount - item.cost < 0;
    }).map(t => t.itemId);

    console.log({discountCode, lossItems});
    return {discountCode, lossItems};

    // const discountCodes = new Set();



//  inventory.forEach((invent) => {
//     transactions.filter((tran) =>  
//             (invent.id === tran.itemId 
//                 && invent.cost > tran.amount
//                 && tran.discountCode !== null))
//                 .forEach((item) => {
//                     if(!result[item.discountCode]) {
//                         result[item.discountCode] = [];
//                     }
//                     result[item.discountCode].push(item.itemId);
//                 });      
    
//             });
    // transactions.forEach((codes) => {
    //     if(codes.discountCode !== null && codes.discountCode !== undefined) {
    //         discountCodes.add(codes.discountCode);            
    //     }});
        
    //  discountCodes.forEach((code) => {
    //      const codeByItems = {
    //          discountCodes: code,
    //          lossItems:[]
    //      };
    //     transactions.filter((item) => item.discountCode === code)
    //                 .forEach((item) => codeByItems.lossItems.push(item.itemId));
    //     Object.assign(result,codeByItems);
    //     console.log(result);
    // })
     console.log(result);
};

lossItems();