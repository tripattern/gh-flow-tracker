const request = require('supertest')
const app = require('../app')
describe('Get Endpoints', () => {
    it('should get the commits per day', async () => {
        const res = await request(app)
            .get('/api/commits-per-day')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('respond with commits per day');
    })
})