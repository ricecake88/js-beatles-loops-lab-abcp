function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = new Array();
  
  for (var i=0; i < musicianArray.length; i++) {
    newArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`;
  }
  
  return newArray;
}

function johnLennonFacts(factArray) {
  var i = 0;
  while (i < factArray.length) {
    factArray[i] = factArray[i] + "!!!";
    i++;
  }
  return factArray;
}

function iLoveTheBeatles(num) {
  var newArray = new Array();
  var i = 0;
  
  do {
    newArray[i] = "I love the Beatles!";
    num++;
    i++;
  } while(num < 15);
  
  return newArray;
}