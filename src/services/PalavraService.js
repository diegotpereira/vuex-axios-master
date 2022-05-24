import Api from './Api'

export default {
    getPalavra () {
        return Api.get('/http://localhost:8080/api/')
    },
    getPalavraDetalhe (params) {
        return Api.get('/palavra/' + params)
    }
}