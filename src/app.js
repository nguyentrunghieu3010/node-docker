var express = require('express');
var app = express(); //init Express

var port = process.env.PORT || 8080;

//init Express Router
var router = express.Router();

router.route('/createUser').post((req, res) => {
    userController.createUser(req.body, (data) => {
        res.send(data);
    });
});

router.route('/').get((req, res) => {
    res.json({ message: 'App is running!' });
});

app.use(router);
app.listen(port);
console.log('Listening on port ' + port);