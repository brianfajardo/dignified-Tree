const add = (a, b) => a + b;

const square = (x) => x * x;

const setName = (userObj, fullName) => {
    const names = fullName.split(' ');
    userObj.firstName = names[0];
    userObj.lastName = names[1]
    return userObj
}

module.exports = {
    add,
    square,
    setName
}