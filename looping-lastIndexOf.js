function lastIndexOf(arr, num){
  let pos = -1;
  if(arr.length < 1){
    return pos;
  }
  for(let i = arr.length-1; i >= 0; i--){
    if(num === arr[i]){
      pos = i;
      break;
    }
   
  
  }
  return pos;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2, 4  ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));