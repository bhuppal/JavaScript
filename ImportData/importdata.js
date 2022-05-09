const inventory = require('./inventory.json');
const inventory_update = require('./inventory_update.json');


const ImportData = () => {
    let result = inventory;
   inventory_update.forEach((item) => {
        const foundItemIndex = result.findIndex(i => i.id === item.id); 
        result[foundItemIndex][Object.keys(item)[1]] = item[Object.keys(item)[1]];
   });
   
}

ImportData();