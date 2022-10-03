export default {
    state: {
        funds: 1000.00,
        stocks: []
    },
    mutations: {
        buyStock(state, {stockID, quantity, stockPrice}){
            // verificar se já existe uma ação no array para incrementar a quantidade ou adicionar uma nova ação
            const record = state.stocks.find(element => element.id == stockID)
            if (record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockID,
                    quantity: quantity
                })
            }

            state.funds -= stockPrice * quantity
        },
        sellStock(state, {stockID, quantity, stockPrice}){
            const record = state.stocks.find(element => element.id == stockID)
            if (record.quantity > quantity){
                record.quantity -= quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds
            // se estiver vazio, envia array vazio
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({commit}, order){
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state){
            return state.funds
        }
    }
}