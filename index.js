const FIRST_POSITION = 0;
let myFibonacciSecuence = [];

const _getFibonacciNumbers = (index) => {
  if (index < 2) {
    return index;
  }
  return _getFibonacciNumbers(index - 2) + _getFibonacciNumbers(index - 1);
};

const _isLessThanZero = (number) => {
  return number < 0;
};

const _printFibonacciNumbers = (positionQuantity, currentPosition = 0) => {
    
  if (currentPosition >= positionQuantity) {
    // console.log(myFibonacciSecuence);
    return;
  }
  // console.log(_getFibonacciNumbers(currentPosition));
  myFibonacciSecuence.push(_getFibonacciNumbers(currentPosition));
  _printFibonacciNumbers(positionQuantity, currentPosition + 1);
  
};

const getFibonacciSequence = (positionQuantity) => {
  if(typeof positionQuantity !== 'number') {
    return undefined;
  }
  if (_isLessThanZero(positionQuantity)) {
    return _getFibonacciNumbers(FIRST_POSITION);
  }
 _printFibonacciNumbers(positionQuantity);
  return myFibonacciSecuence;
};

console.log(getFibonacciSequence(['array1','array2']));

module.exports = getFibonacciSequence;