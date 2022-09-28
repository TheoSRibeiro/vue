new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods:{
        aumentar(){
            this.valor++
        },
        diminuir(){
            this.valor--
        }
    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
            // ou
            // if(this.valor != 37){
            //     return 'Valor Diferente'
            // }else{
            //     return 'Valor Igual'
            // }
        }
    },
    watch:{
        resultado(){
            setTimeout(() => {
            this.valor = 0
            }, 5000);
        }
    }
});