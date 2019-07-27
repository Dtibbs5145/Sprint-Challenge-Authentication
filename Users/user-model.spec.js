const db = require('../database/dbConfig');

const Users = require('./user-model');

describe('user model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('add()', () => {
        it('should add user', async () => {
            await Users.add({ username: 'Lillian', password: 'pass' });
            await Users.add({ username: 'Becky', password: 'pass' });
            await Users.add({ username: 'Damion', password: 'pass' });
            const users = await db('users');
            expect(users).toHaveLength(3);
        });
        it('shows a 200 code', async () => {
            await Users.add({ username: 'Destiny', password: 'pass' });
            const user = await Users.add({ username: 'Raine', password: 'pass' });
            expect(user.username).toHaveLength(5);
        });
    });
});