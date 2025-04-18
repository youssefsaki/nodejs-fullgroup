const express = require('express');
const app = express();

//* first Install Mongodb => npm i mongodb 
const { MongoClient } = require('mongodb');

app.use(express.json());

const url = 'mongodb://localhost:27017';
const databaseName = 'studentsDB';

let db;

//* Function To Connect To Database : 
const connectToMongoDb = async () => {
    try {
        const client = await MongoClient.connect(url);
        db = client.db(databaseName);
        console.log('Database Connected')
    } catch (error) {
        console.error('Failed To Connect to The Database', error);
    }
}

connectToMongoDb().then( () => {
    const PORT = 5500;
    app.listen(PORT, () => {
        console.log(`Server is Running on Port ${PORT}`)
    })
}).catch(err => console.log(err));

app.get('/all-students', async (req, res) => {
    try {
        const data = await db.collection('students').find().toArray();
        res.json(data);
        console.log('Hello')
    } catch (error) {
        console.log(error);
    }
})




