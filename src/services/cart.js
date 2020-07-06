import { http } from './config'

export default {

    listar:() => {
        return http.get('cart/list')
    },

    criar:() => {
        return http.get('cart/add')
    },

    deletar:() => {
        return http.get('user/delete')
    }

}