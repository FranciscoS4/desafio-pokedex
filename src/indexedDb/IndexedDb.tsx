import { IDBPDatabase, openDB} from 'idb';

class IndexedDb {
  private database: string;
  private db: any;

  constructor(database: string) {
      this.database = database;
  }

  public async createObjectStore(tableNames: string[]) {
      try {
          this.db = await openDB(this.database, 1, {
              upgrade(db: IDBPDatabase) {
                  for (const tableName of tableNames) {
                      if (db.objectStoreNames.contains(tableName)) {
                          continue;
                      }
                      db.createObjectStore(tableName, {autoIncrement: true, keyPath: 'id'});
                  }
              },
          });
      } catch (error) {
          return false;
      }
  }

  public async putValue(tableName: string, value: object) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.put(value);
    console.log('Put Data ', JSON.stringify(result));
    return result;
    }
}

export default IndexedDb;