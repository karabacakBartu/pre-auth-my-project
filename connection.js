"use strict";
const { MongoClient } = require('mongodb');
const user = 'bartu';
const pass = '156612';
const dbName = 'Library';
const url = 'cluster0.itgsdyh.mongodb.net';
const uri = 'mongodb+srv://' + user + ':' + pass + '@' + url + '/' + dbName + '?retryWrites=true&w=majority';

async function getConnection() {

    try {
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return {database,client};
    } catch (e) {
        throw  Error(e);
    }

}


module.exports = {
    getConnection,
};