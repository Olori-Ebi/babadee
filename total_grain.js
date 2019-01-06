let n=64;
let arr=[];
total=0;
for (let i=0; i<n; i++) {
  let pow=2**i;
  arr.push(pow)
}
console.log(arr)
for (let i=0; i<arr.length; i++){
  total+=arr[i]
}
console.log('the cost of grains for the prince life is ', total )

