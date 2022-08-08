class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  takeInput(ele) {
    var newnode = new Node(ele);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = this.tail.next;
    }
  }
  findTail() {
    let c = this.head;
    let count = 1;
    while (c.next != null) {
      c = c.next;
      count++;
    }

    return [c, count];
    // console.log(c);
  }
  expression(t) {
    let n = t[1];
    let tail = t[0].data;
    let start = this.head;
    let prev = null;
    if (n % 2 == 0) {
      for (let i = 0; i < n / 2; i++) {
        var newNode = new Node(tail - i);
        prev = start;
        start = start.next;
        newNode.next = start;
        prev.next = newNode;

        // console.log(start);
      }
      //   console.log(start, n, tail);
    } else {
      for (let j = 0; j < Math.floor(n / 2); j++) {
        var newNode = new Node(tail - j);
        prev = start;
        start = start.next;
        newNode.next = start;
        prev.next = newNode;
      }
      //   console.log(start, n, tail);
    }
  }

  printLL(t) {
    var temp = this.head;
    let n = t[1];
    let i = 0;
    while (i < n) {
      console.log(temp.data);
      i++;
      temp = temp.next;
    }
  }
}

var ll = new LL();
ll.takeInput(1);
ll.takeInput(2);
ll.takeInput(3);
ll.takeInput(4);
// ll.takeInput(5);
// ll.takeInput(6);
// ll.takeInput(7);
//ll.printLL();
// ll.deleteEle(3);
let tail = ll.findTail();
ll.expression(tail);

ll.printLL(tail);
