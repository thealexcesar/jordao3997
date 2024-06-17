<template>
  <div id="app">
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('es')">Español</button>
    <button @click="changeLanguage('pt')">Português</button>
    <button @click="changeLanguage('de')">Deutsch</button>

    <div style="display:flex; justify-content: center; align-items: center; flex-direction: column;">

      <img alt="Vue logo" src="@/assets/3997.jpg" width="300" />
      <div class="hello" style="display:flex;">
        <HomePage :msg="msg" />
        <h1>{{ $t('welcome') }}</h1>
        <h1>{{ $t('about') }}</h1>
        <h1>{{ $t('contact') }}</h1>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";

export default {
  name: 'App',
  components: {
    HomePage
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style lang="sass">
  @import "@/assets/style"
</style>