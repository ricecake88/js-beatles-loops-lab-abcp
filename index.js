function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = [];
  
  for (var i=0; i < musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`;
  }
  
  return newArray;
}

function johnLennonFacts(factArray) {
  var i = 0;
  var newArray;
  while (i < factArray.length) {
    newArray[i] = factArray[i] + "!!!"
  }
  return newArray;
}