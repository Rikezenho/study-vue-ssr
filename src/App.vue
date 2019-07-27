<template>
  <div id="app">
    <div id="menu">
      <router-link
        v-for="route in routes"
        :to="route.path"
        :key="route.path"
      >
          {{ route.name }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './router';

export default {
  name: "app-ssr",
  data() {
    return {
      title: "Teste",
      routes,
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
