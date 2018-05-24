function solution(A) {  
  var B = [];
  for(var p=1; p < A.length; p++){
    let A1 = A.slice(0, p);
    let A2 = A.slice(p, A.length);
    B.push(Math.abs(sumOfArray(A1) - sumOfArray(A2)));
  }
  function sumOfArray(arr){
    let q = 0;
    for (i=0; i<arr.length; i++){
      q+=arr[i];
    }
    return q;
  }
  return Math.min.apply(null, B);
}
//O(n*n); можно попробовать сравнивать сразу и не запоминать в массив
//типа в переменную записывать