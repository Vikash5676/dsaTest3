function reverseStack(arr, s1) {
  for (let k = 0; k < arr.length + 4; k++) {
    s1.push(arr.pop());
  }
  console.log(s1);
}

function stack2(arr) {
  let s2 = [];

  for (let i = 0; i < arr.length + 4; i++) {
    s2.push(arr.pop());
  }

  //   console.log(s2, arr);
  stack3(s2, arr);
}

function stack3(arr, s1) {
  let s3 = [];
  for (let j = 0; j < arr.length + 4; j++) {
    s3.push(arr.pop());
  }
  reverseStack(s3, s1);
}

stack2([1, 2, 3, 4, 5]);
