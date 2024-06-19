<template>
  <div id="app">
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      msg: ""
    };
  }
}
</script>

<style lang="sass">
  @import "@/assets/style"
</style>
