/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * src: https://projecteuler.net/problem=1
 */

let sum1 = 0
let x = 1
while (x < 334) {
    sum1 += (3 * x)
    x += 1
}

let i = 1
let sum2 = 0
while (i < 200) {
    if (i % 3 !== 0) {
        sum2 += (i * 5)
    }
    i += 1
}

console.log("summation", sum1 + sum2)