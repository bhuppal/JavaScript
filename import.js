const inventory = [
    {
      "id": 10252,
      "itemType": "kayak",
      "brand": "Simonis",
      "color": "blue",
      "price": 141.59,
      "cost": 80.18
    },
    {
      "id": 59915,
      "itemType": "sleepingBags",
      "brand": "Simonis",
      "color": "gray",
      "price": 84.41,
      "cost": 40.49
    },
    {
      "id": 22346,
      "itemType": "kayak",
      "brand": "Wilder",
      "color": "red",
      "price": 321.96,
      "cost": 151.12
    },
    {
      "id": 5137,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "yellow",
      "price": 116.86,
      "cost": 80.83
    },
    {
      "id": 21325,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "tan",
      "price": 172.49,
      "cost": 103.54
    },
    {
      "id": 90419,
      "itemType": "shirts",
      "brand": "Red Rock",
      "color": "green",
      "price": 20.48,
      "cost": 12.17
    },
    {
      "id": 85999,
      "itemType": "kayak",
      "brand": "Simonis",
      "color": "green",
      "price": 162.44,
      "cost": 97.2
    },
    {
      "id": 72227,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "silver",
      "price": 231.25,
      "cost": 125.59
    },
    {
      "id": 96196,
      "itemType": "boot",
      "brand": "Wilder",
      "color": "gray",
      "price": 43.74,
      "cost": 37.18
    },
    {
      "id": 20737,
      "itemType": "boot",
      "brand": "Lowlands",
      "color": "gray",
      "price": 134.76,
      "cost": 96.56
    },
    {
      "id": 80690,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "blue",
      "price": 126.19,
      "cost": 58.18
    },
    {
      "id": 39344,
      "itemType": "boot",
      "brand": "Simonis",
      "color": "blue",
      "price": 44.84,
      "cost": 24.44
    },
    {
      "id": 5094,
      "itemType": "sleepingBags",
      "brand": "Wilder",
      "color": "tan",
      "price": 85.77,
      "cost": 56.87
    },
    {
      "id": 15816,
      "itemType": "kayak",
      "brand": "Lowlands",
      "color": "gray",
      "price": 226.64,
      "cost": 188.83
    },
    {
      "id": 66741,
      "itemType": "tents",
      "brand": "North by Northwest",
      "color": "green",
      "price": 258.68,
      "cost": 150.38
    },
    {
      "id": 25159,
      "itemType": "boot",
      "brand": "Lowlands",
      "color": "silver",
      "price": 78.4,
      "cost": 50.21
    },
    {
      "id": 62530,
      "itemType": "boot",
      "brand": "Simonis",
      "color": "tan",
      "price": 112.75,
      "cost": 86.12
    },
    {
      "id": 33242,
      "itemType": "tents",
      "brand": "North by Northwest",
      "color": "black",
      "price": 269.68,
      "cost": 215.55
    },
    {
      "id": 91273,
      "itemType": "tents",
      "brand": "Simonis",
      "color": "black",
      "price": 349.54,
      "cost": 279.62
    },
    {
      "id": 35389,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "gray",
      "price": 168.42,
      "cost": 93.25
    },
    {
      "id": 66980,
      "itemType": "tents",
      "brand": "Wilder",
      "color": "yellow",
      "price": 249.99,
      "cost": 121.14
    },
    {
      "id": 38210,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "red",
      "price": 147.61,
      "cost": 93.36
    },
    {
      "id": 52352,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "yellow",
      "price": 14.94,
      "cost": 10.59
    },
    {
      "id": 92356,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "green",
      "price": 11.34,
      "cost": 9.15
    },
    {
      "id": 7227,
      "itemType": "shirts",
      "brand": "Simonis",
      "color": "green",
      "price": 7.99,
      "cost": 6.99
    },
    {
      "id": 72061,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "yellow",
      "price": 91.47,
      "cost": 41.52
    },
    {
      "id": 90359,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "green",
      "price": 29.34,
      "cost": 23.72
    },
    {
      "id": 36889,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "tan",
      "price": 252.62,
      "cost": 220.81
    },
    {
      "id": 48113,
      "itemType": "sleepingBags",
      "brand": "Wilder",
      "color": "red",
      "price": 93.5,
      "cost": 40.67
    },
    {
      "id": 81891,
      "itemType": "tents",
      "brand": "North by Northwest",
      "color": "yellow",
      "price": 264.71,
      "cost": 108.15
    },
    {
      "id": 66777,
      "itemType": "boot",
      "brand": "Lowlands",
      "color": "blue",
      "price": 103.49,
      "cost": 55.62
    },
    {
      "id": 41170,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "silver",
      "price": 172.52,
      "cost": 146.21
    },
    {
      "id": 55069,
      "itemType": "sleepingBags",
      "brand": "Simonis",
      "color": "yellow",
      "price": 127.82,
      "cost": 53.83
    },
    {
      "id": 32642,
      "itemType": "tents",
      "brand": "North by Northwest",
      "color": "silver",
      "price": 290.13,
      "cost": 187.92
    },
    {
      "id": 87970,
      "itemType": "boot",
      "brand": "Simonis",
      "color": "blue",
      "price": 134.24,
      "cost": 105.99
    },
    {
      "id": 26558,
      "itemType": "kayak",
      "brand": "Wilder",
      "color": "tan",
      "price": 222.64,
      "cost": 95.93
    },
    {
      "id": 88146,
      "itemType": "shirts",
      "brand": "Simonis",
      "color": "green",
      "price": 31.29,
      "cost": 14.74
    },
    {
      "id": 32463,
      "itemType": "boot",
      "brand": "Wilder",
      "color": "red",
      "price": 66.63,
      "cost": 34.54
    },
    {
      "id": 45734,
      "itemType": "tents",
      "brand": "Lowlands",
      "color": "tan",
      "price": 326.42,
      "cost": 181.36
    },
    {
      "id": 86190,
      "itemType": "backpacks",
      "brand": "Simonis",
      "color": "yellow",
      "price": 42.54,
      "cost": 35.39
    },
    {
      "id": 75673,
      "itemType": "kayak",
      "brand": "North by Northwest",
      "color": "yellow",
      "price": 78.5,
      "cost": 69.83
    },
    {
      "id": 78906,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "yellow",
      "price": 70.9,
      "cost": 42.04
    },
    {
      "id": 60862,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "green",
      "price": 174.71,
      "cost": 83.56
    },
    {
      "id": 21519,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "tan",
      "price": 14.66,
      "cost": 10.66
    },
    {
      "id": 38527,
      "itemType": "backpacks",
      "brand": "Lowlands",
      "color": "blue",
      "price": 100.2,
      "cost": 41.03
    },
    {
      "id": 90075,
      "itemType": "tents",
      "brand": "Wilder",
      "color": "blue",
      "price": 102.59,
      "cost": 65.36
    },
    {
      "id": 96260,
      "itemType": "sleepingBags",
      "brand": "Lowlands",
      "color": "yellow",
      "price": 136.42,
      "cost": 83.34
    },
    {
      "id": 96274,
      "itemType": "backpacks",
      "brand": "Simonis",
      "color": "tan",
      "price": 122.27,
      "cost": 60.15
    },
    {
      "id": 46320,
      "itemType": "kayak",
      "brand": "Red Rock",
      "color": "yellow",
      "price": 127.11,
      "cost": 93.58
    },
    {
      "id": 20997,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "blue",
      "price": 49.97,
      "cost": 43.6
    },
    {
      "id": 99902,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "red",
      "price": 198.08,
      "cost": 100.07
    },
    {
      "id": 93913,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "black",
      "price": 26.03,
      "cost": 21.11
    },
    {
      "id": 97063,
      "itemType": "boot",
      "brand": "Wilder",
      "color": "yellow",
      "price": 121.26,
      "cost": 77.91
    },
    {
      "id": 1438,
      "itemType": "kayak",
      "brand": "North by Northwest",
      "color": "black",
      "price": 111.8,
      "cost": 59.22
    },
    {
      "id": 40146,
      "itemType": "sleepingBags",
      "brand": "Simonis",
      "color": "red",
      "price": 159.14,
      "cost": 95.82
    },
    {
      "id": 41676,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "tan",
      "price": 11.44,
      "cost": 10.07
    },
    {
      "id": 61747,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "yellow",
      "price": 7.13,
      "cost": 3.41
    },
    {
      "id": 26248,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "yellow",
      "price": 91.64,
      "cost": 61.65
    },
    {
      "id": 42307,
      "itemType": "tents",
      "brand": "Simonis",
      "color": "red",
      "price": 313.46,
      "cost": 273.83
    },
    {
      "id": 55416,
      "itemType": "backpacks",
      "brand": "Lowlands",
      "color": "green",
      "price": 53.45,
      "cost": 27.47
    },
    {
      "id": 14324,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "gray",
      "price": 160.21,
      "cost": 138.65
    },
    {
      "id": 7310,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "tan",
      "price": 96.97,
      "cost": 40.86
    },
    {
      "id": 44410,
      "itemType": "shirts",
      "brand": "Red Rock",
      "color": "black",
      "price": 16.34,
      "cost": 9.48
    },
    {
      "id": 11414,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "tan",
      "price": 122.05,
      "cost": 88.74
    },
    {
      "id": 88751,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "red",
      "price": 16.5,
      "cost": 8.52
    },
    {
      "id": 13385,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "red",
      "price": 42.02,
      "cost": 34.14
    },
    {
      "id": 38548,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "blue",
      "price": 11.39,
      "cost": 8.39
    },
    {
      "id": 27176,
      "itemType": "sleepingBags",
      "brand": "Lowlands",
      "color": "black",
      "price": 134.04,
      "cost": 71.85
    },
    {
      "id": 54206,
      "itemType": "kayak",
      "brand": "Red Rock",
      "color": "silver",
      "price": 255.32,
      "cost": 127.92
    },
    {
      "id": 51535,
      "itemType": "kayak",
      "brand": "Red Rock",
      "color": "yellow",
      "price": 133.36,
      "cost": 56.09
    },
    {
      "id": 31620,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "yellow",
      "price": 31.76,
      "cost": 13.43
    },
    {
      "id": 13783,
      "itemType": "tents",
      "brand": "Wilder",
      "color": "yellow",
      "price": 346.09,
      "cost": 183.04
    },
    {
      "id": 93155,
      "itemType": "boot",
      "brand": "Simonis",
      "color": "black",
      "price": 56.03,
      "cost": 36.49
    },
    {
      "id": 59121,
      "itemType": "kayak",
      "brand": "Lowlands",
      "color": "tan",
      "price": 332.23,
      "cost": 258.78
    },
    {
      "id": 1449,
      "itemType": "backpacks",
      "brand": "Wilder",
      "color": "silver",
      "price": 88.57,
      "cost": 65.24
    },
    {
      "id": 79818,
      "itemType": "tents",
      "brand": "Simonis",
      "color": "silver",
      "price": 323.94,
      "cost": 261.24
    },
    {
      "id": 60388,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "yellow",
      "price": 117.36,
      "cost": 79.1
    },
    {
      "id": 6364,
      "itemType": "boot",
      "brand": "Wilder",
      "color": "gray",
      "price": 117.04,
      "cost": 87.02
    },
    {
      "id": 65510,
      "itemType": "tents",
      "brand": "Lowlands",
      "color": "gray",
      "price": 84.46,
      "cost": 35.29
    },
    {
      "id": 96969,
      "itemType": "boot",
      "brand": "North by Northwest",
      "color": "black",
      "price": 95.89,
      "cost": 83.3
    },
    {
      "id": 66872,
      "itemType": "sleepingBags",
      "brand": "Wilder",
      "color": "tan",
      "price": 129.77,
      "cost": 66.55
    },
    {
      "id": 9678,
      "itemType": "kayak",
      "brand": "Simonis",
      "color": "blue",
      "price": 123.58,
      "cost": 102.48
    },
    {
      "id": 86326,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "gray",
      "price": 14.23,
      "cost": 11.6
    },
    {
      "id": 38393,
      "itemType": "tents",
      "brand": "North by Northwest",
      "color": "tan",
      "price": 327.32,
      "cost": 270
    },
    {
      "id": 75725,
      "itemType": "sleepingBags",
      "brand": "North by Northwest",
      "color": "black",
      "price": 62.3,
      "cost": 44.53
    },
    {
      "id": 70758,
      "itemType": "backpacks",
      "brand": "Lowlands",
      "color": "gray",
      "price": 42.9,
      "cost": 33.23
    },
    {
      "id": 41693,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "green",
      "price": 145.74,
      "cost": 90.51
    },
    {
      "id": 48634,
      "itemType": "shirts",
      "brand": "Wilder",
      "color": "green",
      "price": 13.96,
      "cost": 10.39
    },
    {
      "id": 98408,
      "itemType": "shirts",
      "brand": "Lowlands",
      "color": "gray",
      "price": 25.79,
      "cost": 14.59
    },
    {
      "id": 16869,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "red",
      "price": 122.11,
      "cost": 68.82
    },
    {
      "id": 17951,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "black",
      "price": 282,
      "cost": 155.03
    },
    {
      "id": 35742,
      "itemType": "shirts",
      "brand": "Simonis",
      "color": "green",
      "price": 21.78,
      "cost": 18.66
    },
    {
      "id": 69237,
      "itemType": "boot",
      "brand": "Red Rock",
      "color": "gray",
      "price": 102.02,
      "cost": 65.05
    },
    {
      "id": 92813,
      "itemType": "sleepingBags",
      "brand": "Wilder",
      "color": "silver",
      "price": 146.37,
      "cost": 101.86
    },
    {
      "id": 64559,
      "itemType": "sleepingBags",
      "brand": "Red Rock",
      "color": "green",
      "price": 68.34,
      "cost": 29.41
    },
    {
      "id": 49870,
      "itemType": "kayak",
      "brand": "North by Northwest",
      "color": "gray",
      "price": 200.06,
      "cost": 179.89
    },
    {
      "id": 21508,
      "itemType": "tents",
      "brand": "Red Rock",
      "color": "gray",
      "price": 229.63,
      "cost": 97.07
    },
    {
      "id": 36318,
      "itemType": "tents",
      "brand": "Wilder",
      "color": "tan",
      "price": 168.3,
      "cost": 149.95
    },
    {
      "id": 4554,
      "itemType": "kayak",
      "brand": "Red Rock",
      "color": "yellow",
      "price": 201.28,
      "cost": 151.71
    },
    {
      "id": 2786,
      "itemType": "kayak",
      "brand": "Wilder",
      "color": "silver",
      "price": 169.9,
      "cost": 86.29
    }
  ];
  
  const inventory_update = [
    { "id": 10252, "cost": 45.35 }
    // { "id": 14324, "brand": "Lowlands" },
    // { "id": 80690, "color": "red" },
    // { "id": 1438, "brand": "North by Northwest" },
    // { "id": 65510, "color": "red" },
    // { "id": 86190, "brand": "Lowlands" },
    // { "id": 60388, "price": 101.94 },
    // { "id": 9678, "price": 294.47 },
    // { "id": 66777, "color": "red" },
    // { "id": 88751, "price": 32.58 },
    // { "id": 59121, "brand": "Wilder" },
    // { "id": 60388, "color": "yellow" },
    // { "id": 98408, "color": "blue" },
    // { "id": 38527, "price": 111.45 },
    // { "id": 92813, "cost": 79.6 },
    // { "id": 21508, "brand": "Red Rock" },
    // { "id": 10252, "color": "blue" },
    // { "id": 16869, "cost": 113.56 },
    // { "id": 69237, "color": "blue" },
    // { "id": 46320, "cost": 92.3 },
    // { "id": 88146, "brand": "Simonis" },
    // { "id": 5137, "brand": "Lowlands" },
    // { "id": 75725, "cost": 77.5 },
    // { "id": 59121, "cost": 103.49 },
    // { "id": 51535, "price": 347.55 }
  ];  

inventory_update.forEach(row => {
        const index = inventory.findIndex(item => item.id === row.id);
        if (index > -1) {
            Object.keys(row).forEach(item => {
                inventory[index][item] = row[item];
            });
        }
});

//console.log(inventory[0]);
// const boots = (() => {
//     return inventory.filter((item) => item.itemType === "boots");
// }
// );
//  inventory.forEach(row =>{
//     if (row["itemType"] === "boot") {
//         boots.push(row);
//     }
// });

//console.log(boots)

/*
{
      "id": 10252,
      "itemType": "kayak",
      "brand": "Simonis",
      "color": "blue",
      "price": 141.59,
      "cost": 80.18
    },
*/


const result = {};

inventory.forEach(row => {
    if (!result[row.itemType])  {  
        let temp = Object.assign({}, row);
        delete temp.itemType;
        result[row.itemType] = [temp];

    } else {        
        let temp = Object.assign({}, row);
        delete temp.itemType;
        result[row.itemType].push(temp);
    }
})

console.log(result);



