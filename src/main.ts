import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Item } from './schemas/Item';
import db from './utils/dexie';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

async function fetching(url: string) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
}

async function main() {
  // const itemList = await fetching('https://api.guildwars2.com/v2/items');
  const itemList = 10000;
  const chunkSize = 200;
  const pages = Math.floor(itemList / chunkSize);
  console.log(itemList, pages, chunkSize);

  if (await db.items.count() !== itemList) {
    console.log('Starting fetch');

    const items:any[] = [];
    const fetchArr = [];
    for (let i = 0; i < pages; i++) {
      fetchArr.push(fetching(`https://api.guildwars2.com/v2/items?page=${i}&page_size=${chunkSize}`)
        .then(a => items.push(a.map((b: any) => new Item(b)))));
    }

    await Promise.all(fetchArr);
    items.forEach(async elem => await Promise.all(elem.map((e: any) => new Promise(() => db.items.put(e)))));

    console.log('done', await db.items.count());
  } else {
    console.log('collection length is', await db.items.count());
  }
}

main();
