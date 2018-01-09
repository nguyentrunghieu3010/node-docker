var User = require('../models/user.model');

exports.createUser = (req, callback) => {
    console.log('Request body object', req);

    var user = new User();
    user.username = req.username;
    user.password = req.password;

    user.save((err) => {
        if (err)
            res.send(err);
        res.json({ message: 'Contact created!' });
    });

    return callback(res);
}