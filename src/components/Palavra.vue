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
            <router-link v-bind="{name: 'PalavraLista'}"></router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Palavra',
  data () {
        return {
            palavra: this.$route.params.id,
            palavraId: this$route.params.data.id,
            parteDaPalavra: '',
            sensos: ''
        }
    },
    mounted() {
        this.getPalavraDetalhes(this.palavraId) 
    },
    methods: {
        async getPalavraDetalhes(params) {
            const resposta = await PalavraService.getPalavraDetalhes(params)
            let data = resposta.data.result 
            this.parteDaPalavra = data.parte_da_palavra
            this.sensos = data.sensos
        }
    }
}
</script>
<style lang="scss" scoped>
    .wordlist-container{
        margin-top: 60px;

        .wordlist-columns{
            width: 100%;
            display: flex;
            margin: 0 auto;
            text-align: left;
            align-items: center;

            h2{
                flex: 0 0 15%;
                margin-top: 10px;
                text-align: center;
            }

            .wordlist {
                overflow: auto;
                flex: 0 0 85%;

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    height: calc(100vh-84px);
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: -10px;
                    margin-top: -10px;

                    li {
                        text-align:  center;
                        background: cadetblue;
                        padding: 10px;
                        margin: 5px;
                        flex: 1 0 auto;
                        box-sizing: border-box;
                        padding: 10px;
                        margin-left: 10px;
                        margin-top: 10px;

                        a {
                            color: white;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
        .nav-links{
            display: flex;
            width: 100%;
            position: fixed;
            bottom: 62px;
            left: 0;
            justify-content: space-between;

            a {
                padding: 20px 50px;
                text-align: center;
                background-color: royalblue;
                -webkit-box-flex: 0;
                -ms-flex: 0 0 48%;
                flex: 0 0 48%;
                margin: 0 20px;
                box-sizing: border-box;
                display: block;
                text-decoration: none;
                color: white;
            }
        }
    }
</style>
