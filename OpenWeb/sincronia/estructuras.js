//SET

const setEjemplo = new Set([2, 3, 3, 2]);  //Almacena [2,3]

setEjemplo.has(2);// ->true
setEjemplo.has(1);// ->false

setEjemplo.add(2);// [2,3]
setEjemplo.add(1);// [2,3,1]

setEjemplo.delete(2); // [3,1]

const newObje = {};
const otherObje = {}

setEjemplo.add(newObje); // [3,1,{}]
setEjemplo.add(newObje); // [3,1,{}]
setEjemplo.add(otherObje); // [3,1, {},{}]

//MAP

const mapEjemplo = new Map({ a: 1, b: 4 });// Almacena {a:1 , b:4}

mapEjemplo.has("a");// true
mapEjemplo.has("c");// false

mapEjemplo.set("c", 5); //{a:1, b:4, c:5}
mapEjemplo.get("c");// 5

mapEjemplo.delete("a");//{b:4, c:5}

const newObj = {};

mapEjemplo.set(newObj, 5)// {b:4, c:5, ref:5}
mapEjemplo.delete({});// {b:4, c:5, ref:5}
mapEjemplo.delete(newObj);//{b:4, c:5}

//COLAS Y PILAS

class Stack {
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    stack(el) {
        //añade elemento a items
        this.items.push(el);
    }
    unstack() {
        //devuelve el ultimo elemento o undefined
        return this.length() > 0 ? this.items.pop : undefined;
    }
}

class Queue {
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    enqueue(el) {
        //añade un elemento a items
        this.items.push(el);
    }
    dequeue() {
        //devuelve el primer elemento o undefined
        return this.length() > 0 ? this.items.shift() : undefined;
    }
}

//LISTAS ENLAZADAS

class ListNode{
    constructor(data){
        this.data=data;
        this.nextId = null;
    }
}
class LinkedList{
    constructor(head = null){
        this.head = head;
    }
    getLast(){
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    size(){
        let count =0;
        let node = this.head;
        while (node){
            count++;
            node = node.next
        }
        return count;
    }
}

let node1= new ListNode(2);
let node2 = new ListNode(5);
node1.next=node2;
let list = new LinkedList(node1);