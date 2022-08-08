function sortestSubarray(str1, str2) {
  let newStr = "";
  let arr = [];
  let sum = str1;
  for (let i of subStrings(str1)) {
    if (i.match(str2[0]) && i.match(str2[1]) && i.match(str2[2])) {
      arr.push(i);
    }
    // console.log(i);
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length < sum.length) {
      sum = arr[j];
    }
  }

  console.log(sum);
}

function subStrings(str) {
  //   let newStr = "";
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    for (j = i; j < str.length + 1; j++) {
      newArr.push(str.slice(i, j));
    }
    // console.log(newStr);
    // newStr = "";
  }
  return newArr;
}

sortestSubarray("timetopractice", "toc");
sortestSubarray("zoomlazapzo", "oza");
