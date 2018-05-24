function getNumber(N) {

  //allNum - все делители N от 2 до 9
  let allNum = [];
  let res = [];

  for (var i=2; i<10; i++) {
    if (N % i == 0) {
      allNum.push(i);
    }
  }
  for (let i=allNum.length-1; i>=0; i--){
    if (N != 1) {
      res.push(allNum[i]);
      N = N/allNum[i];
    }
  }
  if (res[0] == undefined) {
    return 0;
  }
  return res.reverse().join('');
}

// console.log(getNumber(11));
getNumber(10)