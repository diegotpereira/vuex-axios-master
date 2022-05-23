import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        palavras: []
    },
    mutations: {
        addPalavra (state, palavra) {
            state.palavras.push(palavra)
        },
        deletarPalavras (state, palavra) {
            state.palavras = state.palavras.filter(obj => obj.palavraprincipal !== palavra)
        }
    }
})
