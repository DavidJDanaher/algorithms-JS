// Steps
// Generate primes below the larger value
// Factor each number in range
// Generate multiple of all factors

function smallestCommons(arr) {
    var i;
    var currentFactors;
    var larger;
    var smaller;
    var primesInRange;
    var factorMap;
    var keys;
    var key;
    var total = 1;

    arr = arr.sort();
    larger = arr[1];
    smaller = arr[0];

    primesInRange = getPrimesBelow(larger);
    factorMap = new FactorMap(primesInRange);

    for (i = smaller; i <= larger; i++) {
        currentFactors = getFactorsOf(i, primesInRange);

        for (key in currentFactors) {
            if (currentFactors[key] > factorMap[key]) {
                factorMap[key] = currentFactors[key];
            }
        }
    }

    for (var prop in factorMap) {
        total *= Math.pow(prop,factorMap[prop]);
    }

    return total;
}

function getPrimesBelow(val) {
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

function getFactorsOf(val, primes) {
    var prime;
    var factors = new FactorMap(primes);
    var i = 0;

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

this.smallestCommons = smallestCommons;
module.exports = this;
