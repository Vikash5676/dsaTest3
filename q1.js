function maxocc(arr) {
  let n = arr.length;
  let obj = {};
  let occ = 0;

  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[i] > occ) {
      occ = obj[i];
    }
  }
  if (occ > Math.floor(n / 2)) console.log(occ);
  else console.log(-1);
}

maxocc([1, 2, 3]);
maxocc([3, 1, 3, 3, 2]);
