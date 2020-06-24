//jshints esversion:6
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitDB';

// Create a new MongoClient

const client = new MongoClient(url, { useNewUrlParser: true});



  // Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
/*
    // Insert a single document
     db.collection('fruits').insertOne(
       {
         name : "Apple",
         rating : 7.5,
         review : "Good"
       }, function(err, r) {
       assert.equal(null, err);
       assert.equal(1, r.insertedCount);

     });

       // Insert multiple documents
       db.collection('fruits').insertMany([
         {
           name : "Orange",
           rating : 7.1,
           review : "Satisfied"
         },
         {
           name : "Banana",
           rating : 9,
           review : "Very Good"
         },
         {
           name : "Grapes",
           rating : 8.1,
           review : "Good"
         }
       ], function(err, r) {
         assert.equal(null, err);
         assert.equal(3, r.insertedCount);
       });

       console.log("Insertion is done in the collection");
*/



/*
    db.collection('fruits').updateMany({name: "Banana"}, {$set: {color : "yellow"}}, function(err, r) {
     assert.equal(null, err);
     assert.equal(3, r.matchedCount);
     assert.equal(3, r.modifiedCount);
   });
*/

db.collection('fruits').deleteMany({rating: {$gt : 5}}, function(err, r) {
    assert.equal(null, err);
    assert.equal(6, r.deletedCount);
  });
    client.close();
  });
