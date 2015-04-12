// Minimum

function findMinimum(val1, val2){
  if(val1 < val2){
    return val1;
  }
  else{
    return val2;
  }
}
console.log(findMinimum(13, 15));
console.log(findMinimum(-3, 3));

// Recursion
function isEven(number){
  number = Math.abs(number);
  if(number === 0){
    return true;
  }
  else if(number === 1){
    return false;
  }
  else{
    return isEven(number - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting
function countBs(string){
  var counter = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) === 'B'){
      counter++;
    }
  }
  return counter;
}
console.log(countBs('BBC'));
console.log(countBs('BrownBear'));

function countChar(string, letter){
  var counter = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) === letter){
      counter++;
    }
  }
  return counter;
}
console.log(countChar('kakkerlak', 'k'));
