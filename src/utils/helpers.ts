export async function fetchJson(url: string) {
  try {
    const req = await fetch(url);
    const res = await req.json();
    return res;
  } catch (e) {
    console.error(e);
  }
}

interface Search {
  name: string;
  page?: number;
}

export async function searchItems(arg: Search) {
  if (!arg?.name) return {};
  return await fetchJson(`https://www.gw2spidy.com/api/v0.9/json/item-search/${arg.name}/${arg.page || 1}`);
}

const apiURL = 'https://api.guildwars2.com/v2';
export async function getItemData(id: number) {
  return await fetchJson(`${apiURL}/items/${id}`);
}

export async function getItemPriceData(id: number) {
  return {
    listings: await fetchJson(`${apiURL}/commerce/listings/${id}`),
    price: await fetchJson(`${apiURL}/commerce/prices/${id}`)
  };
}
