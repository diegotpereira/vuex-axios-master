import Api from './Api'

export default {
    getPalavra (params) {
        return Api.get('/http://localhost:8080/' + params.palavra)
    },
    getPalavraDetalhe (params) {
        return Api.get('/entries/' + params)
    }
}