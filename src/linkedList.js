// create the node class

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// create the linkedList class

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node =  new Node(value);
        // case if the list is already empty
        // point the head pointer to the newly created node
        if(this.isEmpty()){
            this.head = node;
        }
        // if already elements are there in the list
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            this.next = node;
            node.next = null;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
// console.log("list is empty?", list.isEmpty());
// console.log("list size", list.getSize());
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
list.append(40);
list.append(50);
list.append(60);

list.print();
console.log(list.isEmpty());
console.log(list.getSize());
