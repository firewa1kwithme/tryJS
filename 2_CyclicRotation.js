function solution(A, K) {
	var res = [];
    for (var i=0; i<=A.length-1; i++){
      if (i+K < A.length) {
        res[i+K] = A[i];
      } else {
        res[i+K-A.length] = A[i];
      }
    }
    return res;
}