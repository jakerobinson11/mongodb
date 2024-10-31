const { MongoClient } = require('mongodb');
require('dotenv').config()

const client = new MongoClient(process.env.MONGODB_URL);
console.dir(process.env.MONGODB_URL);

/* async await */
const main = async ()=>{
    await client.connect();
    console.log('connection etablie');
    const db = client.db('chat');
    const users = db.collection("users");
}
main();