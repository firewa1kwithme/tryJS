function solution(A) {
  var res;
  for (var i=0; i<=A.length-1; i++){
    for (var j=1; j <= A.length-1; j++){
      if (A[i] == A[i+j]){
        delete A[i];
        delete A[i+j];
      }
    } 
  }
  for (var i=0; i<=A.length-1; i++){
    if (A[i] != undefined){
      return A[i];
    }
  }
}
function solution1(A){
  A.sort();
  while (A[A.length-1]==A[A.length-2]) {
    A.pop();
    A.pop()
  }
  return A[A.length-1];
}