<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
// mutation
// import { mapMutations } from 'vuex'
// action
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed: {
        // quantidade(){
        //     return this.$store.state.parametros.quantidade
        // },
        // preco() {
        //     return this.$store.state.parametros.preco
        // } 
        ...mapGetters('parametros',{
            quantidade: 'getQuantidade',
            preco: 'getPreco'
        })

    },
    methods: {
        // mutation - uso do dispatch
        // ...mapMutations(['adicionarProduto']),
        // action -> uso do dispatch
        ...mapActions('carrinho',['setProduto']),
        // ...mapActions faz
        // setProduto(produto){
        // this.$store.dispatch('setProduto', produto) 
        // },
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            console.log(produto)

            // this.$store.state.produtos.push(produto)
            // utilizando mutation para o push de produtos
            // this.$store.commit('adicionarProduto', produto)
            //  ou, usando mutation
            // this.adicionarProduto(produto)
            // ou, usando action
            // this.$store.dispatch('setProduto', produto) 
            // ou, action mais direta - mapActions
            this.setProduto(produto)
            // eslint-disable-next-line
            console.log(this.$store.getters.getNome)
            // eslint-disable-next-line
            console.log(this.$store.getters.getNomeCompleto)

        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
