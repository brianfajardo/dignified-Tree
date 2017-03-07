// Behaviour driven development (Mocha)
const utils = require('./utils');
const expect = require('expect');

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

// it('should expect a value', () => {
//     // expect(1).toNotBe(2)
//     // expect({color: 'orange'}).toNotEqual({color: 'red'})
//     // expect([1,2,3]).toInclude(2)
//     // expect([1,2,3]).toExclude(4)
//     // expect({
//     //     name:'Brian',
//     //     location:'Canada',
//     //     season: 'spring'
//     // }).toInclude({
//     //     location:'Canada'
// })