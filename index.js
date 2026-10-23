function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check for factors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Export isPrime as a named property of module.exports
module.exports = {
  isPrime
};