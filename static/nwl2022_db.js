// db.js
import Dexie from 'dexie';

export const nwl2022_db = new Dexie('nwl2022');
nwl2022_db.version(1).stores({
  data: 'Word, Number', // Primary key and indexed props
});
