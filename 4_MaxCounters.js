//55 https://app.codility.com/demo/results/trainingFSAK4W-V6R/
function solution(N, A) {
  var B = [];
  for (var i=0; i<N; i++){
    B.push(0);
  }
  for (var j=0; j<A.length; j++){
    if (A[j] <= N){
      B[A[j]-1] += 1;
    }
    else if (A[j] == N+1){
      for (var i=0; i<N; i++){
        B[i] = Math.max.apply(null, B);
      }
    }
  }
  return B;
}