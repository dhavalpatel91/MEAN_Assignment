// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db BrokersDetails --collection Broker --jsonArray Broker.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use BrokersDetails

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.Broker.count()

// Query all
db.Broker.find()

// Query all (formatted)
db.Broker.find().pretty()

// Find one.
db.Broker.findOne()

// Query.
db.Broker.find({BrokersId: '67687'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.Broker.find({
  BrokersId: '67687',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.Broker.insert({
  "name": "Maryland",
  "BrokersId": "67687",

})

// Update.
db.Broker.update(                  // collection
  {BrokersId: '67687'},           // update criteria
  {$set: {BrokersId: '785442'}},// update action
  {multi: true})                   // update option

// See last insert.
db.Broker.find().sort({_id: -1}).limit(1)

// Remove all.
db.Broker.remove({})

// Get count.
db.Broker.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db BrokersDetails --collection Broker --jsonArray Broker.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use BrokersDetails


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.BrokersId": 1})