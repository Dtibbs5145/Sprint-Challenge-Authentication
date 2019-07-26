const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,   
};

async function add(user) {
    const [id] = await db('user').insert(user);
    return findById(id);
}

function find() {
    return db('user').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('user').where(filter);
}

function findById(id) {
    return db('user')
        .where({ id })
        .first()
}