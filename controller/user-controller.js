exports.createUser = (req, callback) => {
    console.log('Request body object', req.body);
    return callback(req.body);
}