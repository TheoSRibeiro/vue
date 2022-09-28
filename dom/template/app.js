new Vue({
    el: '#desafio',
    data:{
        nome: "Theo",
        idade: 30,
        img: 'img.png'
    },
    methods:{
        idadeX3(){            
            return this.idade * 3
        },
        randnum(){        
            return Math.random() * 1
        }

    }
})