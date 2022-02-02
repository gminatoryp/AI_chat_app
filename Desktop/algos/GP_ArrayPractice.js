//Given Array
//#1 Print each array value and the sum so far
/*
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21
*/

var testArr = [6,3,5,1,2,4]
var i
sum = 0
for (i=0; i<=testArr.length; i++) {
    sum = sum + testArr[i]
    console.log("Num,", testArr[i], "Sum", sum)
}


//#2 Multiply each value in the array by its array position
//The expected output will  [0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4]
var i
pos = []
for (i=0; i<testArr.length; i++) {
    pos.push(testArr[i] * i)
}
console.log(pos)
