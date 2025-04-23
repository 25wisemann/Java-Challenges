function Primes(n) {
    let factors = [0]
    let start = 2
  
    while (n >= 2) {
      if (n % start === 0) {
        factors.push(start)
        n = n / start
      } else {
        start++
      }
    }
    return factors[factors.length-1]
  }
  console.log(Primes(600851475143))