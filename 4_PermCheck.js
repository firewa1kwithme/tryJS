// function solution(A) {
//   var uniqueA = new Set(A.sort());
//   var B = new Set();
//   for (let j=1; j <= uniqueA; j++){
//     B.add(j);
//   }
//   // for (let k = 0; k <= B.size; k++) {
//     // if (B.entries(A)) {
//     //   return B[k];
//     // }
//     return uniqueA.has(B);
//     // return uniqueA;
// }
//75 https://app.codility.com/demo/results/trainingHMNP99-GB5/
function solution(A) {
  var AA = new Set(A.sort());
  var B = [];
  for (let j=1; j <= A.length; j++){
    B.push(j);
  }
  for (let i=0; i<A.length; i++){
    var C = B[i] - A[i];
  }
  if (C == 0) {
    return 1;
  } else {return 0;}  
}
//https://app.codility.com/demo/results/training5YH8MQ-E8M/
function solution(A) {
  A.sort();
  var B = [];
  for (let j=1; j <= A.length; j++){
    B.push(j);
  }
  for (let k = 0; k < A.length; k++) {
    if (A[k] != B[k]) {
      return 0;
    }
  } return 1;
}

function solution(A) {
  // var AA = new Set(A.sort());
  A.sort();
  var B = [];
  for (let j=1; j <= A.length; j++){
    B.push(j);
  }
  if (A[0] == 1){
    for (var i=0, k=1; k<A.length; i++, k++){
      if (B[i] + 1 !== A[k]){
        return 0;
        break
      }
    }
    return 1;
  } else {return 0;}
  
}
//83
function solution(A) {
  var sumTh = A.length*(A.length+1)/2;
  const add = (a, b) => a + b;
  const sumA = A.reduce(add);
  if (A.indexOf(1) != -1) {
    return +(sumA === sumTh);
  } else { return 0;}
}
//100 https://app.codility.com/demo/results/training29738P-5F9/
function solution(A) {
  var sumTh = A.length*(A.length+1)/2;
  var B = [];
  for (i=0; i<A.length;i++){
    sumTh -= A[i];
    if (B[A[i]]) {
      return 0;
    }
    B[A[i]] = true;
  }
  return +(sumTh == 0);
}

var a = [4, 1, 3];
var b = [];
// var N = Math.random()*(10 - 1) + 1;
// for (i = 0; i <= N; i++){
//   b[i] = Math.floor(Math.random()*(10 - 1) + 1);
// }
var c = [];
N = 10000;
for (let j=1; j <= N; j++){
    c.push(j);
  }
console.log(a);
solution(a);