<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{nome}}</strong></p>
        <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- :usuarioNome é propriedade em UsuarioInfoComponent -->
            <app-usuario-info 
            
            :usuarioNome="nome"
            :idade="idade"
            @nomeMudou="nome=$event.antigo + ' | ' + $event.novo"
            :reiniciarFN="reiniciarNome"
            />
            <app-usuario-editar 
            :idade="idade"
            
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfoComponent'
import AppUsuarioEditar from './UsuarioEditarComponent'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return{
            nome: 'Pedro',
            idade: 21
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Ana'
        },
        // funcao callback
        reiniciarNome(){
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
