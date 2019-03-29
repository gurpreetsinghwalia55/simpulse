const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";
const initBlock = require('./initblock');

async function insertInitBlock(date) {
    var client = await MongoClient.connect(url);
    var db = client.db('sim');
    await db.collection('pulse').insert(initBlock);
    console.log('Initial Block Inserted');
    client.close();
}

async function findById(id) {
    var client = await MongoClient.connect(url);
    var db = client.db('sim');
    var cursor = db.collection('pulse').find({_id: mongo.ObjectID(id)});
    var ret = Promise.resolve(cursor.next());
    client.close();
    return ret;
}

/* var hour = 0;
var minute = 7;
var t = 98.6;
var o = 98;
var b = 113;
var h = 80;

var str = `{
    "${hour}": {
        "${minute}": {
            "t": ${t},
            "h": ${h},
            "o": ${o},
            "b": ${b}
        }
    } 
}`;

var obj = JSON.parse(str);

console.log(obj); */

findById('5c9dad34c9852a038c14e147').then(res => console.log(res))