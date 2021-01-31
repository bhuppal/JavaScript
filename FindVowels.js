let characters = ['a', 'e', 'i', 'o', 'u'];
let strValue = 'aeiobzxceiaipbiox';
console.log(strValue.split('').reduce(function(previous, char) {
    if(characters.includes(char)) {
        previous++
    }
    return previous;
}, 0));