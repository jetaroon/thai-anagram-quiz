// db.js
import Dexie from 'dexie';

export const csw21_db = new Dexie('csw21');
csw21_db.version(1).stores({
  data: 'Word, Number', // Primary key and indexed props
});
