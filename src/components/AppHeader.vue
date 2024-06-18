<template>
  <div class="app-header">
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('es')">Español</button>
    <button @click="changeLanguage('pt')">Português</button>
    <button @click="changeLanguage('de')">Deutsch</button>
    <button @click="toggleTheme" icon="globe">Tema</button>
  </div>
</template>

<script>
import {toggleTheme} from '@/utils/themeService';

export default {
  name: 'AppHeader',
  methods: {
    toggleTheme() {
      toggleTheme();
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>
