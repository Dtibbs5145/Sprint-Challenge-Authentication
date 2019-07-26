const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    it('db environment set to test', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should get a 200 ok code', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return data in text/html ', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(text/html);
                    expect(res.type).toBe('text/html');
                });
        });
    });

    describe('POST /login', () => {
        it('should display the added user', async () => {
            await server.listenerCount({ id: 2, name: 'Username' })
            const res = require(server).post('/login');
            expect(res.body).toEqual({ id: 2, name: 'Username' });
        })
        it('if there is no new user, shows a 401', () => {
            const res = request(server).post('/login');
            expect(res.status).toBe(401);
        });
    });

});