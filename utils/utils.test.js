// Behaviour driven development (Mocha)
const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => { /* describe() is a Mocha function for grouping test cases (organization) */

    it('should add two numbers', () => {
        const res = utils.add(5, 10);

        expect(res)
            .toBe(15)
            .toBeA('number')
    });

    it('should square a number', () => {
        const res = utils.square(5);

        expect(res)
            .toBe(25)
            .toBeA('number')
    });

    describe('#asynchronous', () => {
        // passing 'done' tells Mocha that the test is not done yet (ie. setTimeout example)
        it('should async add two numbers after 1 second', (done) => {
            utils.asyncAdd(2, 3, (sum) => {
                expect(sum)
                    .toBe(5)
                    .toBeA('number');
                done() /* tells Mocha test is done and can process result for pass/fail */
            })
        });

        it('should async square two numbers after 1 second', (done) => {
            utils.asyncSquare(10, (squared) => {
                expect(squared)
                    .toBe(100)
                    .toBeA('number');
                done()
            })
        });
    })
})

it('should split full name into user.firstName and user.lastName', () => {
    const user = {
        location: 'Sweden',
        occupation: 'producer'
    };
    const res = utils.setName(user, 'Eric Prydz');

    expect(res)
        .toBeA('object')
        .toInclude({
            firstName: 'Eric',
            lastName: 'Prydz'
        })
});