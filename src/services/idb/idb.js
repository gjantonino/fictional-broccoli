import { openDB } from 'idb/with-async-ittr';

export async function open() {
  return await openDB('Activty', 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('activity', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      store.createIndex('locationName', 'locationName');
    },
  });
}

export async function getAll(db) {
  try {
    return await db.getAll('activity');
  } catch (e) {
    throw new Error(`Error getting from indexedDB: ${e.message}`)
  }
}

export async function add(db, data) {
  try {
    await db.add('activity', data);
  } catch (e) {
    console.error(e)
    throw new Error(`Error adding to indexedDB: ${e.message}`)
  }
}

export async function addMany(db, data) {
  try {
    const tx = db.transaction('activity', 'readwrite');
    await Promise.all(data.map((obj) => tx.store.put(obj)));
  } catch (e) {
    throw new Error(`Error adding to indexedDB: ${e.message}`)
  }
}



