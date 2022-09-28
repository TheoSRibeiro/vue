<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo">
		{{mensagem.texto}}
		</b-alert>

		<b-card>
			<b-form-group label="Nome: ">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o seu Nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail: ">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o seu E-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click.prevent="salvar"
				size="lg" variant="primary">Salvar
			</b-button>

			<b-button @click="obterUsuarios"
				size="lg" variant="success" class="ml-2">Obter Usuários
			</b-button>

			<b-button @click="obterUsuariosComAxios"
				size="lg" variant="success" class="ml-2">Obter Usuários Com Axios localmente
			</b-button>
			
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong>{{usuario.nome}} <br>
				<strong>Email: </strong> {{usuario.email}} <br>
				<strong>ID: </strong> {{id}} <br>

				<b-button variant="warning" size="lg" @click="alterar(id)">Alterar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>

			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import Axios from 'axios'
export default {
	data(){
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods:{
		salvar(){
			if (this.usuario.nome != '' || this.usuario.email != ''){
				// this.$http.post('usuarios.json', this.usuario)
				const metodo = this.id ? 'patch' : 'post'
				const finalUrl = this.id ? `/${this.id}.json` : '.json'

				this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})
				})
			}else{
				alert("Preencha os dados!")
			}
			
		},
		obterUsuarios(){
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
			})
			// header local
			//this.$http.defaults.headers.common['Authorization'] = 'abc123'
		},
		// se for utilizar para capturar dados de outra aplicação expecífica
		obterUsuariosComAxios(){
			Axios('https://curso-vue-4954b-default-rtdb.firebaseio.com/usuarios.json').then(res => {
				this.usuarios = res.data
			})
		},
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		alterar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				.catch(() => {
					this.mensagens.push({
						texto: `Erro ao excluir`,
						tipo: 'danger'
					})
				})
		}
	}

	//exemplo de inserção no banco de dados
	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'João',
	// 		email: 'joao_m@gmail.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
