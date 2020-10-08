module.exports = function reverse (n) {
    let str = String(n).split('').reverse().join('');
    let strArr=str.split('');
    console.log(strArr)
    if(strArr[strArr.length-1]=='-'){
     strArr.splice(strArr.length-1,1)
    }
    let num=+strArr.join('');
   return num;
}
