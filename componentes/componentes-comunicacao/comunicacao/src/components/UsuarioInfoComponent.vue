<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{usuarioNome}}</strong></p>
        <p>Idade do usuário: <strong>{{idade}}</strong></p>
        <p>Nome do Usuário invertido: <strong>{{inverterNome()}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFN()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>

import barramento from '@/barramento'

export default {
    props: {
        usuarioNome:{
            type: String,
            // required: true,
            // default: function(){
            //     return Array(10).fill(0).join(',')
            // }
             default: "Anônimo"
        },
        // funcao callback
        reiniciarFN: Function,
        idade: Number
    },
    methods: {
        inverterNome(){
            return this.usuarioNome.split('').reverse().join('')
        },
        // Comunicacao Indireta
        reiniciarNome(){    
            // evento $emit 
            const antigo = this.usuarioNome      
            this.usuarioNome = 'Pedro'
            this.$emit('nomeMudou', {

            // novo: this.usuarioNome,
            novo: 'Pedro',
            antigo: antigo
            })
        }
    },
    created(){
        barramento.onIdadeMudar((idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
