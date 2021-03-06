function pairwise(arr, arg) {
  var noMut = Array.from(arr);                    //copy arr
  var indices = 0;                                //sum of indices
  var index;
  for(var i = 0; i < noMut.length -1; i++) {      //last element have not pair
    index = noMut.indexOf(arg - noMut[i], i + 1); //search index
    if(index !== -1) {
      indices += i + index;
      noMut[i] = noMut[index] = NaN;
    }  
  }
  return indices;
}
pairwise([1,4,2,3,0,5], 7);
