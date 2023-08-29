const fizzBuzz = require ('./fizzBuzzKata.js');

test('Si el numero 3 es divisible entre 3 el programa debe imprimir fizz ', () => {
    const result = fizzBuzz(3)
    expect(result).toBe('Fizz');
})

test('Si el numero 5 es divisible entre 5 el programa debe imprimir fizz ', () => {
    const result = fizzBuzz(5)
    expect(result).toBe('Buzz');
})