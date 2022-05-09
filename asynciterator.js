const urls = [
    "https://api.publicapis.org/entries",
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    "https://www.boredapi.com/api/activity",
    "https://api.coindesk.com/v1/bpi/currentprice.json"
];

async function* fetchInSeries([...urls]) {
    for(const url of urls) {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("HTTP Status ", response.status)
        }
        yield response.json();
    }
}


for await (const value of fetchInSeries([...urls])) {
        console.log(value);
}