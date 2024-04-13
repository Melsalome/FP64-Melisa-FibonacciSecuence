const getFibonacciSequence = (positionQuantity) => {
    if (_isLessThanZero(positionQuantity)) {
      return _getFibonacciNumbers(FIRST_POSITION);
    }
    return _printFibonacciNumbers(positionQuantity);
  };
  
 