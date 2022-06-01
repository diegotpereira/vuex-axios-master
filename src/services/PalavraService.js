import Api from './Api'

export default {
    getPalavra () {
        return Api.get('http://localhost:3000/palavras')
    },
    getPalavraDetalhe (params) {
        return Api.get('/palavras/' + params)
    }
}