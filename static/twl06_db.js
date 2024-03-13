// db.js
import Dexie from 'dexie';

export const twl06_db = new Dexie('twl06');
twl06_db.version(1).stores({
  data: 'Word, Number', // Primary key and indexed props
});
