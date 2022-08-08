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
    while (c.next != null) {
      c = c.next;
    }
    c.next = this.head.next;
    // console.log(c);
  }
  Cycle() {
    let slow = this.head;
    let fast = this.head;
    if (fast == null || fast.next == null) {
      return false;
    }

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow == fast) {
        return true;
      }
    }
    if (fast == null) {
      return false;
    }
  }

  printLL() {
    var temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

var ll = new LL();
ll.takeInput(2);
ll.takeInput(3);
ll.takeInput(4);
ll.takeInput(5);
ll.takeInput(6);
ll.takeInput(7);
//ll.printLL();
// ll.deleteEle(3);
ll.findTail();
console.log(ll.Cycle());

// ll.printLL();
