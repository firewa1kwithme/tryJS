function solution(X, A) {
    var uniqueA = new Set();
    for(var i=0; i < A.length; i++) {
      if (A[i] <= X) {
        uniqueA.add(A[i]);
        if (uniqueA.size == X) {
          return i;
        }
      }
    } return -1;
}