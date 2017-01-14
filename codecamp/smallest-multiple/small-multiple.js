// Steps
// Generate primes below the larger value
// Factor each number in range
// Generate multiple of all factors

function smallestCommons(arr) {
    var i;
    var currentFactors;
    var upperBound;
    var lowerBound;
    var relevantPrimes;
    var commonFactors;
    var total = 1;

    arr = arr.sort();
    upperBound = arr[1];
    lowerBound = arr[0];

    relevantPrimes = getPrimesUpTo(upperBound);
    commonFactors = new FactorMap(relevantPrimes);

    for (i = lowerBound; i <= upperBound; i++) {
        currentFactors = getPrimeFactors(i, relevantPrimes);

        for (factor in currentFactors) {
            if (currentFactors[factor] > commonFactors[factor]) {
                commonFactors[factor] = currentFactors[factor];
            }
        }
    }

    for (var factor in commonFactors) {
        total *= Math.pow(factor, commonFactors[factor]);
    }

    return total;
}

function getPrimesUpTo(val) {
    var primes = [2];
    var candidate = 3;
    var i;
    var isPrime;

    while (candidate <= val) {
        isPrime = true;

        for (i = 0; i < primes.length; i++) {
            if (candidate % primes[i] === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(candidate);
        }

        candidate++;
    }

    return primes;
}

function getPrimeFactors(val, primes) {
    var prime;
    var i = 0;
    var factors = new FactorMap(primes);

    while (val > 1) {
        prime = primes[i];

        while(val % prime === 0) {
            factors[prime] += 1;
            val /= prime;
        }

        i++;
    }

    return factors;
}

function FactorMap(primes) {
    var factors = this;

    primes.forEach(function(prime) {
        factors[prime] = 0;
    });

    return factors;
}

module.exports = smallestCommons;
