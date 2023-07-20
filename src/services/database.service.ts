// External Dependencies
import * as mongoDB from "mongodb"
import * as dotenv from "dotenv"

interface Collections {
    users: mongoDB.Collection,
    games: mongoDB.Collection
}

// Global Variables
export const collections = {} as Collections satisfies Collections

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING as string);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const usersCollection: mongoDB.Collection = db.collection(process.env.USERS_COLLECTION_NAME as string);
    const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME as string);
 
    collections.users = usersCollection;
    collections.games = gamesCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
 }