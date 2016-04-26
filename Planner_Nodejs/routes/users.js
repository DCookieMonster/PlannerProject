var express = require('express');
var router = express.Router();
var http = require('http');
var request = require("request");
/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    res.json(quotes);
});


//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/planner';


var quotes = [
    {
        author: 'http://www.nejm.org/doi/full/10.1056/NEJMsa060247',
        text: "Nothing is impossible, the word itself says 'I'm possible'!"
    },
    {
        author: 'http://www.nejm.org/doi/full/10.1056/NEJMsa060247',
        text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
    },
    {author: 'Unknown', text: "Even the greatest was once a beginner. Don't be afraid to take that first step."}];

router.post('/json', function (req, res) {
    //res.json(quotes);

    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('logger');

            //Create some users
            var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};

            // Insert some users
            collection.insert([req.body], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Inserted %d documents into the "planner" collection. The documents inserted with "_id" are:', result.length, result);
                }
                //Close connection
                db.close();
            });
        }
    });
});

module.exports = router;
