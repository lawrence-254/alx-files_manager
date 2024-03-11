// utils/db.js

const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    const dbName = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });

    this.isAlive().then(() => {
      console.log('MongoDB connection established.');
    }).catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  }

  async isAlive() {
    try {
      await this.client.connect();
      return true;
    } catch (err) {
      return false;
    }
  }

  async nbUsers() {
    const db = this.client.db();
    const usersCollection = db.collection('users');
    return usersCollection.countDocuments();
  }

  async nbFiles() {
    const db = this.client.db();
    const filesCollection = db.collection('files');
    return filesCollection.countDocuments();
  }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
module.exports = dbClient;

