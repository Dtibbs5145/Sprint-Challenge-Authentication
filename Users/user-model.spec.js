const db = require('../database/dbConfig');

const Users = require('./user-model');

describe('user-model.js', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', () => {
        it('should add user', async () => {
            await Users.insert({ name: 'Lillian' });
            await Users.insert({ name: 'Becky' });
            await Users.insert({ name: 'Damion' });
            const users = await db('users');
            expect(users).toHaveLength(3);
        });
        it('shows a 200 code', async () => {
            const user = await Users.insert({ name: 'Destiny' });
            expect(user.name).toHaveLength(1);
        });

    // describe('()')
    });
});