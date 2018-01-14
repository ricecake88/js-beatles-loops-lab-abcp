function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = [];
  
  for (var i=0; i < musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`;
  }
  
  return newArray;
}

function johnLennonFacts(factArray) {
  while (i < factArray.length) {
    factArray[i] = factArray[i] + "!!!"
  }
}