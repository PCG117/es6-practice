let arr = [11,22,66,77,10]

let item = arr.find(value=>value>20)
console.log(item);//22

console.log(arr.find(value=>value>80))//undefined