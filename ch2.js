// Looping a Triangle
var triangle = '#';
var i = 0;
while(i < 7){
  console.log(triangle);
  triangle += '#';
  i++;
}

// FizzBuzz
for(var i = 0; i <= 100; i++){
  console.log(i);
  if(i%3 === 0 && i%5 === 0){
    console.log('FizzBuzz');
  }
  else if(i%3 === 3){
    console.log('Fizz');
  }
  else if(i%5 === 0){
    console.log('Buzz');
  }
}

// Chess Board
var size = 8;
for(var i = 0; i < size; i++){
  var row = '';
  var j;
  if(i%2){
    j = 0;
  }
  else{
    j = 1;
  }
  for( ; j < size; j++){

    if(j%2 === 1){
      row += '#';
    }
    else{
      row += ' ';
    }
  }
  console.log(row + '\n');
}
