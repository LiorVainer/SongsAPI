import { Db, MongoClient } from 'mongodb';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || '';
const dbName = process.env.DB_NAME;
const mongoClient = new MongoClient(mongoConnectionString);
let database: Db;
let client: MongoClient;

const initDB = async () => {
  client = await mongoClient.connect();
  console.log('Connected to Mongo!');

  database = await client.db(dbName);
};

const getCollection = (tableName: string) => {
  return database.collection(tableName);
};

const getDatabase = () => database;

const getMongoClient = () => client;

export { initDB, getCollection, getDatabase, getMongoClient };
export default { initDB, getCollection, getDatabase, getMongoClient };
