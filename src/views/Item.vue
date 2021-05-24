<template>
  <div>
    <!-- {{item}} -->
    <p>{{item.name}}</p>
    <p>{{item.description}}</p>
    <p>{{item.level}}</p>
    <p>{{item.rarity}}</p>
    <p>{{item.vendor_value}}</p>
    <p>{{item.chat_link}}</p>
    <img :src="item.icon" />
    <br>
    <!-- <p>{{price.price}}</p> -->
    <!-- <p>{{price.price.buys.unit_price}}</p>
    <p>{{price.price.sells.unit_price}}</p> -->

    <!-- <p>{{price.listings.buys[0]}}</p>
    <p>{{price.listings.sells[0]}}</p> -->

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getItemData, getItemPriceData } from '../utils/helpers.ts';

export default defineComponent({
  name: 'Item',
  data() {
    return {
      item: {},
      price: {}
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getData(this.$route.params.id);
  },
  methods: {
    getData: async function(id) {
      this.item = await getItemData(id);
      this.price = await getItemPriceData(id);
    }
  }
});
</script>
