const inventory = require('./inventory.json');
/*
Find all items that have an itemType of boot
Return an array that only has items that are boot
*/

const getBoots = (searchItem) => {
   return inventory.filter(item => item.itemType === searchItem);
}

const result = getBoots("boot");

console.log(result);