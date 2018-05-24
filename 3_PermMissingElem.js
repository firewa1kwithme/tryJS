function solution(A) {
    A.sort();
    var B = [];
    for (var j=1; j <= A.length+1; j++){
      B.push(j);
    }
    for (var i=0; i <= A.length; i++){      
      if (A[i] != B[i]) {
        return B[i];
      }
    }
}