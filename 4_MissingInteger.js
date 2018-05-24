function solution(A) {
  A.sort();
  var uniqueA = new Set();
  var B = [];
  for (let i = 0; i < A.length; i++){
    if (A[i] > 0) {
      uniqueA.add(A[i]);
    }
  }
  for (let j=1; j <= uniqueA.size+1; j++){
    B.push(j);
  }
  for (let k = 0; k <= uniqueA.size; k++) {
    if (!uniqueA.has(B[k])) {
      return B[k];
    }
  }
}

var a = [1, 2, 3];
var c = [ 5, 1, -9, -9, -2, 2, -2, 2, 1, -9 ];
var b = [];
var N = Math.random()*(10 - 1) + 1;
for (i = 0; i <= N; i++){
  b[i] = Math.floor(Math.random()*(10 + 10) - 10);
}
console.log(a);
solution(a);