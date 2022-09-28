new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertaBotao(){
            alert('Alerta!!')
        },
        keydown(event){
            this.valor = event.target.value
        }
    }
})