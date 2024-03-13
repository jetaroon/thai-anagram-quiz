// db.js
import Dexie from 'dexie';

export const royal_thai54_db = new Dexie('royal_thai54');
royal_thai54_db.version(1).stores({
  data: 'Id, Word, WordReverse, WordFilter, Number', // Primary key and indexed props
});
