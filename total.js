/**
 * Created by super user on 1/3/2019.
 */
let total=0;
let n=100;
let arr=[];
for (let i=1; i<n; i++) {
  if ((i%3==0) || (i%5==0)) {
      arr.push(i)
  }
}
console.log(arr)
for (let i=0; i<arr.length; i++){
  total+=arr[i]
}
console.log(total)
