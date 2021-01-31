var fetch = require("node-fetch");

async function fetchUser() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
        //.then(response => response.json());
        //.then(console.log);
    console.log(data);
}

fetchUser();