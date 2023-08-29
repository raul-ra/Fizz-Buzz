const fizzBuzz = require ('./fizzBuzzKata.js');

test('Si el numero 3 es divisible entre 3 el programa debe imprimir fizz ', () => {
    const result = fizzBuzz(3)
    expect(result).toBe('Fizz');
})

test('Si el numero 5 es divisible entre 5 el programa debe imprimir fizz ', () => {
    const result = fizzBuzz(5)
    expect(result).toBe('Buzz');
})

test('Si el numero indicado es 15 y divisble entre 3 y 5 que imprima FizzBuzz', () => {
    const result = fizzBuzz(15)
    expect(result).toBe('FizzBuzz')
})