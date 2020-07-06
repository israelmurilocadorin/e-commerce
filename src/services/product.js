import { http } from './config'

export default {

    listar:() => {
        return http.get('product/list')
    },

    criar:() => {
        return http.get('product/create')
    },

    atualizar:() => {
        return http.get('product/update')
    },

    deletar:() => {
        return http.get('product/delete')
    }

}