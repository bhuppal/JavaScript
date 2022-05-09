const inventory = require('./inventory.json');

/*

Return an object
Each itemType is a key inside the object
The value for each itemType is an array of items that are that itemType
The objects inside the array, should not have the item type property
"id": 2786,
      "itemType": "kayak",
      "brand": "Wilder",
      "color": "silver",
      "price": 169.9,
      "cost": 86.29

*/

const getInventoryObject = () => {
    let result = {};
    inventory.forEach((item) => { 
        let itemTypeName = item.itemType;
        delete item.itemType;
        if(!result[itemTypeName]) {
            result[itemTypeName] = [item];
        } else {
            result[itemTypeName].push(item);
        }
    });
    console.log(result);
}

getInventoryObject();