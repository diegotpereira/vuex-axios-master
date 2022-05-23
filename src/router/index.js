import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PalavraLista from '@/components/PalavraLista'
import Palavra from '@/components/Palavra'

Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/palavras',
            name: 'PalavraLista',
            component: PalavraLista
        },
        {
            path: '/palavras/palavra/:id',
            name: 'Palavra',
            component: Palavra
        }
    ]
})