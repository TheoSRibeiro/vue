export default {
    namespaced: true,
    state: {
        produtos: []
    },
    // getters captura os valores dos dados
    getters: {
        // rootState captura o estado global e state, local
        // valorTotal(state, getters, rootState)
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                    .reduce((total, atual) => total + atual, 0)
        },
        getProdutos(state){
            return state.produtos
        }
    },
    // mutations só altera o status dos parâmetros (tipo o Repository)
    mutations:{
        // só aceita 2 parametros
        // payload pode ser qlq coisa (obj, array, string, number...)
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        }

    },
    // actions faz um tratamento antes de alterar o valor 
    // onde acontece a lógica (tipo o view) ou regra de negocio
    actions: {
        // rootState acessa o estado global
        //setProduto({context, state, rootState}, payload) 
        // setProduto(context, payload){
        setProduto({commit}, payload){
            // simular metodo assincrono
            setTimeout(() => {
                // a action utiliza o mutation para add no array de produtos
                // context.commit('adicionarProduto', payload)
                commit('adicionarProduto', payload)
            }, 1000)
        }
        // setProduto root
        // não precisa passar o namespace mesmo estando true
        // setProduto: {
        //     root: true,
        //     handler({commit}, payload){
        //         // simular metodo assincrono
        //         setTimeout(() => {
        //             // a action utiliza o mutation para add no array de produtos
        //             // context.commit('adicionarProduto', payload)
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        // }
    }
}