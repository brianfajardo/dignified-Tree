// Behaviour driven development (Mocha)
const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(5, 10);

    if (res !== 15) {
        throw new Error(`Expected: 15, but got ${res}.`)
    };

});

it('should square a number', () => {
    const res = utils.square(5);

    if (res !== 25) {
        throw new Error(`Expected: 25, but got ${res}`)
    };
})