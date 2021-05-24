<template>
<p>Page: {{data.page}}</p>
<p>Last page: {{data.last_page}}</p>
<p>Total hits: {{data.total}}</p>
<div>
  <ul>
    <li v-for="item in data.results" :key="item.data_id">
      <router-link :to="{path: `/item/${item.data_id}`}">{{item.name}}</router-link>
      <p>Rarity: {{item.rarity}}</p>
      <p>Level: {{item.restriction_level}}</p>
      <img :src="item.img" />
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    data: Object
  }
};
</script>
