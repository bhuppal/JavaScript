const fs = require('fs');
const inventory = require('./inventory.json');

const ExportToCSV = () => {
    const header = Object.keys(inventory[0]);
    const body = inventory.map((item) => {
        return Object.values(item).join(',');
    });

    const result = `${header}\n${body.join('\n')}`;
    console.log(result);

    fs.writeFileSync("i.csv", result);
}

ExportToCSV();