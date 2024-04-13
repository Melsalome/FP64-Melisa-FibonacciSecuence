const getFibonacciSequence = require('./index')


test('si paso como parametro un número negativo la expectativa es false', () => {
    const expectedResult = getFibonacciSequence(-5);
    expect(expectedResult).not.toBe(true);
});

test('si paso un parametro no establecido debería retornar undefined', () => {
    const expectedResult = getFibonacciSequence('1');
    expect(expectedResult).toBeUndefined();

});

test('imprime los diez primeros números de la secuencia', () => {
    const expectedResult = getFibonacciSequence(10);
    expect(expectedResult).toStrictEqual([0,1,1,2,3,5,8,13,21,34]);
});

test('pasar un array', () => {
    const expectedResult = getFibonacciSequence(['array1', 'array2']);
    expect(expectedResult).toBeUndefined()
});