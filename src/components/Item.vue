<template>
  <div id="item">
    <h1>{{ title }} - {{ item.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      title: "Item"
    };
  },
  computed: {
    // display the item from store state.
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  },
  mounted () {
    // If we didn't already do it on the server
    // we fetch the item (will first show the loading text)
    if (!this.item) {
      this.fetchItem()
    }
  },
  serverPrefetch () {
    return this.fetchData()
  },
  methods: {
    fetchData () {
      // return the Promise from the action
      return this.$store.dispatch('fetchData', this.$route.params.id)
    }
  }
};
</script>
