//My name is Bhuppal Kumar
//Reverse a string


const strName = "My name is Bhuppal Kumar";

const reverseString = (strSource) => {
   const strReversed = "";
   if(!strSource || strSource.length <= 1 || typeof strSource !== 'string') {

   }
   return strReversed;
}


const arr = strName.split('');
const result = [];
for(let i=arr.length-1; i>=0;i--){
    result.push(arr[i]);
}

console.log(result.join(''));