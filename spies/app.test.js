/*
* Spies are part of the expect package
* Spies are functions that can track the calls that are made to other functions
* and make various assertions based on the arguments and context that were used.
*
*  Rewire adds a special setter and getter to modules so you can modify their behaviour
*  for better unit testing. You may:
*       - Inject mocks for other modules or globals like `process`
*       - Inspect private variables
*       - Override variables within the module
*/

const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app')

describe('App', () => {
    const db = {
        saveUser: expect.createSpy() /* injecting spy */
    };
    // Replacing db variable
    // first argument is thing you want to replace, second arg is the replacer
    // app is rewired to app.js --> spy is rewired into the db.saveUser in the handleSignUp function in app.js (below)
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        const spy = expect.createSpy();
        spy('Brian', 25);

        expect(spy)
            .toHaveBeenCalledWith('Brian', 25);
    });

    it('should call saveUser with user object', () => {
        const email = 'test@example.com';
        const password = '123';

        app.handleSignUp(email, password); /* db.saveUser is now set to the spy version above */
        expect(db.saveUser)
            .toHaveBeenCalledWith({email, password})
    })

})