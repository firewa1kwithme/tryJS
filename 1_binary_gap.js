//60%
function solution(N) {
    var binNum = (+N).toString(2);
    var myPattern = new RegExp("10+");
    res = binNum.match(myPattern);
    if (res != null){
        return res[0].length;
    } else { return 0;}
}
//100
function solution(N) {
    var binNum = N.toString(2).split('1');
    var a = binNum.slice(1, binNum.length - 1);
    a.sort();
    return a[0] != undefined ? a[a.length-1].length : 0;
}
