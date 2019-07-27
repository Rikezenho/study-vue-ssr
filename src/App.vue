<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "app-ssr",
  data() {
    return {
      title: "Teste"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
