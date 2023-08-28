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
export const postDb = async (name, home, cell, email) => {
    try {
      // Open the database
      const db = await initDb();
  
      // Create a transaction and access the object store
      const transaction = db.transaction('yourObjectStoreName', 'readwrite');
      const store = transaction.objectStore('yourObjectStoreName');
  
      // Create a data object to be added to the store
      const data = {
        name,
        home,
        cell,
        email,
      };
  
      // Add the data to the object store
      await store.add(data);
  
      // Complete the transaction
      await transaction.complete;
  
      console.log('Data added to the database successfully');
    } catch (error) {
      console.error('Error adding data to the database', error);
      throw error;
    }
  };
  

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    try {
      // Open the database
      const db = await initDb();
  
      // Create a transaction and access the object store
      const transaction = db.transaction('yourObjectStoreName', 'readonly');
      const store = transaction.objectStore('yourObjectStoreName');
  
      // Use a cursor to retrieve all data from the object store
      const data = [];
      const cursor = await store.openCursor();
  
      while (cursor) {
        data.push(cursor.value);
        cursor.continue();
      }
  
      return data;
    } catch (error) {
      console.error('Error getting data from the database', error);
      throw error;
    }
  };
  

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    try {
      // Open the database
      const db = await initDb();
  
      // Create a transaction and access the object store
      const transaction = db.transaction('yourObjectStoreName', 'readwrite');
      const store = transaction.objectStore('yourObjectStoreName');
  
      // Delete the record by ID
      await store.delete(id);
  
      // Complete the transaction
      await transaction.complete;
  
      console.log(`Data with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting data from the database', error);
      throw error;
    }
  };
  

initDb();
