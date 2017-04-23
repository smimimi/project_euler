// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

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


var maxPrimeFactor = function(number) {
  for (var i = 2; i <= number/2; i++) {
    var factor = number / i;
    if (number % i === 0) {
      if (isPrime(factor)) {
        return factor;
      }
    }
  }
  return "There is no prime factor of " + number;
};

maxPrimeFactor(600851475143);
