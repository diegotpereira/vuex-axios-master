import Api from './Api'

export default {
    getPalavra(params) {
        return Api().get('/wordwise/entries?limit=1&headword=' + params.palavra)
    },
    getPalavraDetalhe(params) {
        return Api().get('/entries/' + params)
    }
}