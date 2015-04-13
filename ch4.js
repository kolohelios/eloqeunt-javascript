// The Sum of a Range

function range(start, end, interval){
  var array = [];
  interval = interval || 1;
  start -= interval;
  do {
    start += interval;
    array.push(start);
  } while (start !== end);
  return array;
}

function sum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));

// Reversing An Array

function reverseArray(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue){
  for(var i = 0; i < arrayValue.length; i++){
    arrayValue.unshift(arrayValue.pop());
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A List

function arrayToList(array){
  var list = null;
  for(var i = array.length - 1; i >= 0; i--){
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list){
  var array = [];
  for(var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

function prepend(a, b){
  var list = {};
  list.value = a, list.rest = b;
  return list;
}

function nth(list, element){
  var counter = 0;
  var value;
  for(var node = list; node; node = node.rest){
    if(node.value && counter === element){
      value = node.value;
    }
    counter++;
  }
  return value;
}


console.log('-0-\n', arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log('-1-\n', listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log('-2-\n', prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log('-3-\n', nth(arrayToList([10, 20, 30]), 1));
// → 20

// Deep Comparison
console.log('deep comparison');

var deepEqual = function (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;
    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else if (x !== y)
    return false;
  else
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
