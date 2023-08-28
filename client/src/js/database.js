// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initDb = async () => {
    try {
      // Open a database (create it if it doesn't exist)
      const db = await openDB('YourDatabaseName', 1, {
        upgrade(db) {
          // Create object stores or perform any database schema upgrades here
          if (!db.objectStoreNames.contains('yourObjectStoreName')) {
            const store = db.createObjectStore('yourObjectStoreName', {
              keyPath: 'id', //  primary key
              autoIncrement: true, // auto-generated keys
            });
          }
        },
      });
  
      console.log('Database initialized successfully', db);
      return db; // You can return the database instance if needed
    } catch (error) {
      console.error('Error initializing database', error);
      throw error;
    }
  };


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initDb();
