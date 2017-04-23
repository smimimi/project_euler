var isPrime = function(number) {
  if (number === 1) {
    return false;
  } else {
    for (var i = 2; i <= number/2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

//isPrime(999999);
