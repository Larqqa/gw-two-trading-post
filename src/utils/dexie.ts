import Dexie from 'dexie';
import { Item } from '../schemas/Item';

export class GW2DB extends Dexie {
  items: Dexie.Table<Item, number>;

  constructor() {
    super('GW2DB');

    this.version(1).stores({
      items: 'id,chatLink,description,icon,level,name,rarity,type,vendorValue,flags,gameTypes,restrictions'
    });
    this.items = this.table('items');
  }
}

const db = new GW2DB();
export default db;
