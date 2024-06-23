<template>
  <header class="header">
    <nav class="flex content-header container">
      <ul class="nav-links flex">
        <li class="logo-wrapper">
<!--          <img alt="Vue logo" src="@/assets/3997.jpg" />-->
        </li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <ul class="nav-links flex">
        <li><button @click="changeLanguage('en')">{{ $t('lang.english') }}</button></li>
        <li><button @click="changeLanguage('es')">{{ $t('lang.spanish') }}</button></li>
        <li><button @click="changeLanguage('pt')">{{ $t('lang.portuguese') }}</button></li>
        <li><button @click="changeLanguage('de')">{{ $t('lang.deutsch') }}</button></li>
        <li><font-awesome-icon @click="toggleTheme" :icon="isDarkTheme ? 'sun' : 'moon'" /></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { toggleTheme } from '@/utils/themeService';

export default {
  name: 'AppHeader',
  data() {
    return {
      isDarkTheme: ''
    };
  },
  mounted() {
    this.isDarkTheme = this.getTheme();
  },
  methods: {
    toggleTheme() {
      toggleTheme();
      this.isDarkTheme = this.getTheme();
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    getTheme() {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }
  }
};
</script>
