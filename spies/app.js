let db = require('./db.js')

const handleSignUp = (email, password) => {
    // Check if email already exists
    // Save the user to the database
    db.saveUser({ email, password });
    // Send welcome email
}

module.exports = {
    handleSignUp
}