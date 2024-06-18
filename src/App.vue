<template>
  <div id="app">
    <AppHeader />
    <div style="display:flex; justify-content: center; align-items: center; flex-direction: column;">
      <div class="img-wrapper">
        <img alt="Vue logo" src="@/assets/3997.jpg" />
      </div>
      <div class="hello" style="display:flex;">
        <AppMain :msg="msg" />
        <h1>{{ $t('welcome') }}</h1>
        <p>{{ $t('about') }}</p>
        <p>{{ $t('contact') }}</p>
      </div>
    </div>
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
