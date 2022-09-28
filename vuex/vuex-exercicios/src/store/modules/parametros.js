export default {
    namespaced: true,
    // state onde é armazenado os dados (BD)
    state: {
        quantidade: 1,
        preco: 1.99
    },
    getters: {
        getQuantidade(state){
            return state.quantidade
        },
        getPreco(state){
            return state.preco
        }
    },
    // mutations só altera o status dos parâmetros (tipo o Repository)
    mutations:{
        // só aceita 2 parametros
        // payload pode ser qlq coisa (obj, array, string, number...)
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        },
    },
    actions: {
        setQuantidade({commit}, payload){
            commit('setQuantidade', payload)
        }
    }
}