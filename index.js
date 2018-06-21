var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat';
  return animal
}

function add2(n) {
  const two = 2
  
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()();
=======
var theFunk = funkyFunction();
>>>>>>> d9a09e2e326be20bcf9bbb3fba272ef58829f56a
