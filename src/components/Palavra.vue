<template>
    <div class="wordlist-container">
        <div class="wordlist-columns">
            <h2>{{palavra}}
                <span v-if="parteDaPalavra">[{{ parteDaPalavra }}</span>:
            </h2>
            <div class="word-info">
                <ul class="words" v-if="sensos">
                    <li v-for="(senso, index) in sensos" :key="index">
                        <div class="word-definition">
                            <h3>Definição #{{ index + 1 }}</h3>
                            <blockquote><p>{{ senso.definicao }}</p></blockquote>
                            <div class="example" v-if="senso.exemplos">
                                <h4>Exemplos: </h4>
                                <ul class="examples">
                                    <li v-for="(exemplo, indexEx) in senso.exemplos" :key="indexEx">
                                        {{ exemplo.texto}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-links">
            <router-link v-bind:to="{name: 'Home'}">Principal</router-link>
            <router-link v-bind:to="{name: 'PalavraLista'}">Lista de Palavras</router-link>
        </div>
    </div>
</template>
<script>
import PalavraService from '@/services/PalavraService'
export default {
  name: 'Palavra',
  data () {
        return {
            palavra: this.$route.params.id,
            palavraId: this.$route.params.data.id,
            parteDaPalavra: '',
            sensos: ''
        }
    },
    mounted () {
        this.getPalavraDetalhes(this.palavraId)
    },
    methods: {
        async getPalavraDetalhes (params) {
            const resposta = await PalavraService.getPalavraDetalhes(params)
            let data = resposta.data.result
            this.parteDaPalavra = data.parte_da_palavra
            this.sensos = data.sensos
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wordlist-container {
  margin-top: 60px;

  .wordlist-columns {
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    h2 {
      flex: 0 0 25%;
      margin-top: 10px;
      text-align: center;
      align-self: flex-start;
    }

    .word-info {
      overflow: auto;
      flex: 0 0 75%;

      .words {
        height: calc(100vh - 200px);
        overflow: auto;
      }

      h4{
        margin-bottom: 10px;
      }
    }

    .examples {
      list-style: circle;
      margin: 0 0 30px 30px;

      li {
        line-height: 30px;
      }
    }
  }

  .nav-links {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 62px;
    left: 0;
    justify-content: center;

    a {
        padding: 20px 50px;
        text-align: center;
        background-color: royalblue;
        -webkit-box-flex: 0;
        flex: 0 0 47%;
        margin: 0 20px;
        box-sizing: border-box;
        display: block;
        text-decoration: none;
        color: white;
    }
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    width: fit-content;
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
}
</style>
