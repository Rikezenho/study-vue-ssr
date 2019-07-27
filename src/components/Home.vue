<template>
  <div id="home">
    <h1>{{ title }}</h1>
    bem-vindos ao vue ssr com route e vuex
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      title: "Home"
    };
  }
};
</script>
