<template>
  <div id="app">
    <div id="header-nav" class="nav-bars">
      <router-link to="/">Principal</router-link>
      <router-link to="/palavras">Palavras</router-link>
      <router-link :to="maisRecentePalavra">{{ maisRecentePalavra }}</router-link>
    </div>
    <router-view/>
    <div id="footer-nav" class="nav-bars">
      Meu Dicionário 2022 -- {{ palavrasContar }} palavras foram adicionadas.
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      palavrasContar: 0,
      maisRecentePalavra: 'mais_Recente_Palavra'
    }
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
  a {
    color: royalblue;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .nav-bars{
    background: cornflowerblue;
    position: fixed;
    width: 100%;
    padding: 10px;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
  #header-nav {
    top: 0;
    left: 0;
  }
  #footer-nav {
    bottom: 0;
    left: 0;
  }
}
</style>
