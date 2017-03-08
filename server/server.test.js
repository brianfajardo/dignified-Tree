const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

it('should return the object response', (done) => {
    request(app) /* supertest */
        .get('/')
        .expect(404)
        .expect((response) => {
            expect(response.body) /* expect dev dependency, not request's */
                .toInclude({
                    error: 'Page not found'
                })
        }) 
        .end(done) /* tells mocha and supertest end of test */
})

// mocha framework testcase
// assert status code is 200
// assert that object with name property 'Brian' exists in users array

it('should return the users array response', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body)
                .toBeA('array')
                .toInclude({
                    name: 'Brian',
                    age: 23
                })
        })
        .end(done)
})