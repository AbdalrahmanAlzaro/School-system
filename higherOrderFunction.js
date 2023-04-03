// const arr = [1,2,3];
// const arry = [1, 2, 3, "Abd"];
// let arrry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// //question 5


// // for loop 
// function powerOfTwoForLoop(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(Math.pow(2, arr[i]));
//     }
//     return result;
//   }
//   console.log(powerOfTwoForLoop(arr));
  



// //forEach loop
// function powerOfTwoForEach(arr) {
//     let result = [];
//     arr.forEach(function(num) {
//       result.push(Math.pow(num, 2));
//     });
//     return result;
//   }
//   console.log(powerOfTwoForEach(arr));
  



// // Map
// function powerOfTwoMap(arr) {
//     return arr.map(function(num) {
//       return Math.pow(num, 2);
//     });
//   }
//   console.log(powerOfTwoMap(arr));







//  //question 6


//  function evenOrOdd(arr) {
//     return arry.map(function(num) {
//       if (typeof num !== "number") {
//         return "N/A";
//       } else if (num % 2 === 0) {
//         return "even";
//       } else {
//         return "odd";
//       }
//     });
//   }
//   console.log(evenOrOdd(arr));  





  
//  //question 7

//  function fizzbuzz(arr) {
//     return arrry.map(function(num) {
//       if (num % 3 === 0 && num % 5 === 0) {
//         return "Fizz Buzz";
//       } else if (num % 3 === 0) {
//         return "Fizz";
//       } else if (num % 5 === 0) {
//         return "Buzz";
//       } else {
//         return num;
//       }
//     });
//   }
//   console.log(fizzbuzz(arr));
  



// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   console.log(factorial(5)); // Output: 120
  


























  //Q2
//   const queue = [1, 2, 3, 4, 5];
//   function reverseQueue(queue) {
//     const stack = [];
//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }
//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }
//     return queue;
//   }



// reverseQueue(queue);
// console.log(queue); // [5, 4, 3, 2, 1]

  




// //Q3

// class Queue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   enqueue(val) {
//     this.s1.push(val);
//   }

//   dequeue() {
//     if (this.s2.length === 0) {
//       while (this.s1.length > 0) {
//         this.s2.push(this.s1.pop());
//       }
//     }
//     if (this.s2.length === 0) {
//       return null; // or throw an error
//     }
//     return this.s2.pop();
//   }
// }


// const q = new Queue();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q.dequeue()); // 1
// console.log(q.dequeue()); // 2
// console.log(q.dequeue()); // 3
// console.log(q.dequeue()); // null














// linked list 



// // q1
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   addNode(data) {
//     const new_node = new Node(data);
//     if (!this.head) {
//       this.head = new_node;
//       this.tail = this.head;
//     } else {
//       this.tail.next = new_node;
//       this.tail = new_node;
//     }
//     this.length++;
//   }


//   deleteMiddleNode() {
//     if (this.length < 2) {
//       return this.head;
//     }
//     const middle = Math.floor(this.length / 2);
//     let prevNode = null;
//     let currNode = this.head;
//     for (let i = 0; i < middle; i++) {
//       prevNode = currNode;
//       currNode = currNode.next;
//     }
//     prevNode.next = currNode.next;
//     this.length--;
//     return this.head;
//   }


// }


// const linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(3);
// linkedList.addNode(4);
// linkedList.addNode(5);

 
// // Before deleting middle node
// console.log(linkedList);

// linkedList.deleteMiddleNode();

// // After deleting middle node
// console.log(linkedList); 







// q2 
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    } 



      reverse(node1) {
        var prev = null;
        var current = node1;
        var next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            node1 = prev;
            return node1;
        }
        }
let node1 = new LinkedList(1);
let node2 = new LinkedList(2);
let node3 = new LinkedList(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list);

console.log(list.reverse(node1));