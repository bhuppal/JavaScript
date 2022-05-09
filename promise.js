function example() {
    return new Promise((resolve, reject) => {
       setTimeout( () => {
           try{
                const success = Math.random() < 0.5;

                if (success) {
                    console.log("Success");
                    resolve("Success");
                } else {
                    console.log("Error");
                    throw new Error("Failed");
                }
           }catch(e){
                reject(e);
           }
       }, 100);
    })
}

example()
.then(value => {
    console.log("Fullfilled with",value);
})
.catch(error => {
    console.log("Rejected with ", error)
})
.finally(() => {
    console.log("Finally block");
});