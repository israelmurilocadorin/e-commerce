import { http } from './config'

export default {

    listar:() => {
        return http.get('user/list')
    },

    criar:() => {
        return http.get('user/create')
    },

    atualizar:() => {
        return http.get('user/update')
    },

    deletar:() => {
        return http.get('user/delete')
    }

}