const add = (a, b) => a + b;

const asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 1000)
}

const square = (x) => x * x;

const asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x)
    }, 1000)
}

const setName = (userObj, fullName) => {
    const names = fullName.split(' ');
    userObj.firstName = names[0];
    userObj.lastName = names[1]
    return userObj
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}