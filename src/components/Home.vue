<template>
  <div class="home">
    <div class="input-container">
      <div class="input-group">
        <input type="text" v-model="palavra" v-on:keydown.enter="getPalavra" />
        <button type="submit" @click="getPalavra">Add Palavra</button>
      </div>
      <div class="word-meaning">
        {{ palavraSignificado || error }}
        <div class="word-links">
          <router-link v-bind:to="{name: 'Palavra', params: {id: palavra, palavra: palavra, data: palavraDado }}">consulte Mais informação</router-link>
          <router-link v-bind:to="{name: 'PalavraLista'}">Palavra Lista</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PalavraService from '@/services/PalavraService'

export default {
  name: 'Home',
  data () {
    return {
      palavra: '',
      palavraDado: '',
      error: ''
    }
  },
  computed: {
    palavraSignificado () {
      if (this.palavraDado) {
        return this.palavraDado.senses[0].definition
      }
      return '  '
    }
  },
  methods: {
    async getPalavra () {
      if (this.palavra === '') {
        this.error = 'Por favor digite uma palavra'
        this.palavraDado = ''

        return false
      }
      const resposta = await PalavraService.getPalavra({ palavra: this.palavra })

      let respostas = resposta.data.results

      if (respostas.length === 0) {
        this.error = 'Sua palavra não foi encontrada e não foi adicionada.'
        this.palavraDado = ''

        return false
      }
      this.palavraDado = respostas[0]
    }
  }
}
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        align-items:center;
        justify-content: center;
        height: calc(100vh);

        .input-container{
            max-width: 500px;
            width:100%;

            .input-group{
                display:flex;
                justify-content: space-between;

                input {
                    box-sizing: border-box;
                    width: calc(100% - 150px);
                    padding: .5rem;
                    border: 2px solid royalblue;
                    font-size: 1rem;
                    border-radius: 0;
                    -webkit-appearance: none;
                }

                button{
                    width:150px;
                    height:50px;
                    -webkit-appearance: none;
                    background: royalblue;
                    color: white;
                    text-transform: uppercase;
                    border: none;
                    font-weight:bold;
                    font-size: 12pt;
                }
            }
        }

        .word-meaning {
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;

            .word-links{
                margin: 30px 0 20px 0;
                font-size: 14px;
                font-weight: regular;

                a {
                    border: 1px solid royalblue;
                    text-decoration: none;
                    padding: 5px 12px 3px 12px;
                    margin: 0 10px;
                    text-transform: uppercase;

                    &:focus {
                        color: royalblue;
                    }
                }
            }
        }
    }
</style>
