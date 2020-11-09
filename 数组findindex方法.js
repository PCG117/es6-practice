let arr = [11, 22, 66, 77, 10]
let index = arr.findIndex(value => value > 20)
console.log(index)//1
console.log(arr.findIndex(value => value > 80))// -1