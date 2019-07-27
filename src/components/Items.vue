<template>
  <div id="item">
    <h1>Items</h1>
    <template v-if="loading">
      Carregando...
    </template>
    <template v-else>
      <div
        v-for="item in items"
        :key="item.id"
        >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "items",
  data() {
    return {
      loading: false,
      title: "Items"
    };
  },
  computed: {
    items () {
      return this.$store.state.items;
    }
  },
  watch: {
    items (newVal) {
      this.loading = false;
    }
  },
  mounted () {
    // If we didn't already do it on the server
    // we fetch the item (will first show the loading text
    if (!this.items.length) {
      this.loading = true;
      this.fetchData()
    }
  },
  serverPrefetch () {
    return this.fetchData()
  },
  methods: {
    fetchData () {
      // return the Promise from the action
      return this.$store.dispatch('fetchData')
    }
  }
};
</script>

<style lang="scss" scoped>
  #item {
    font-family: 'Tahoma';
  }
</style>
