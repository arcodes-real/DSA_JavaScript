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
    // time complexity -> O(1)
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

    // time complexity -> O(n)
    append(value){
        const node = new Node(value);
        // console.log(node);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            curr.next = node;
            while(curr.next){
                curr = curr.next
            }
            
        }
        this.size++;
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return;
        }
        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
        
    }

    removeFromIndex(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }
        else{
            let prev = this.head;
            for(let i=0; i<index-1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeFromValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head.next = this.head;
            this.size--;
            return value;
        }
        else{
            let removedNode;
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            console.log("value doesn't exist");
        }
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
// list.append(40);
// list.append(50);
// list.append(60);
list.insert(40,0);
list.insert(50,1);
list.insert(60,2);
list.insert(70,2);

list.removeFromValue(70);
list.removeFromValue(80);
list.removeFromIndex(2);

list.print();
console.log(list.isEmpty());
console.log(list.getSize());
