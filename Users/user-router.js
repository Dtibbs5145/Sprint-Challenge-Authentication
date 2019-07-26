const router = require('express').Router();
const User = require('./user-model');
const restricted = require('../auth/authenticate');


router.get('/', restricted, (req, res) => {
    User.find()
        .then(user => {
            res.json(user);
        })
        .catch(error => res.send(error));
});

module.exports = router;