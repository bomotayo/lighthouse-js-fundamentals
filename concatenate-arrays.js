function concat(arr1,arr2){
  let newarr = [];
  if(arr1.length < 1){
    newarr = arr2;
  }
  else if(arr2.length < 1){
    newarr = arr1;
  }
  else{
    newarr = arr1.concat(arr2);
  }

  return newarr;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
