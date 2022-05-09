const obj ={
    0:"A",
    1:"B",
    2:"C",
    lenth:3,
    *[Symbol.iterator]() {
        for(let index=0; index<this.lenth; index++){
            yield this[index];
        }
    }
}

for(const value of obj) {
    //console.log(value)
}

/*

// LinkedList example

class LinkedList {
    constructor(){
        this.head = this.tail = null;
    }

    addNode(value) {
        const node = {Value:value, Next:null}
        if(!this.tail){
            this.head = this.tail = node;
        } else{
            this.tail = this.tail.Next = node;
        }
    }

    *[Symbol.iterator]() {
        for(let current = this.head; current; current = current.Next) {
            yield current.Value;
        }
    }
}


const list = new LinkedList();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);

for(const value of list) {
    console.log(value);
}

*/

class LinkedList {
    constructor() {
        this.head  = this.tail = null;
    }

    addNode(value) {
        const newNode = {Value:value, Next:null}

        if(!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail = this.tail.Next = newNode;
        }
    }

    *[Symbol.iterator]() {
        for(let current = this.head; current; current = current.Next) {
            yield current.Value;
        }
    }
}

const list = new LinkedList();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);

for(const value of list) {
    console.log(value);
}