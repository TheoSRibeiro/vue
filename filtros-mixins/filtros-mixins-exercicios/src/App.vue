<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>

		<!-- encadeamento de filtros -->
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpfAluno | cpf | inverter}}</p>
		<input type="text" :value="cpfAluno | cpf | inverter">
		<hr>
		<FrutaComponent/>
		
		<hr>
		
		<ul>
            <li v-for="fruta in frutas" :key="fruta"> {{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import FrutaComponent from './components/FrutaComponent.vue'
import FrutasMixin from './mixins/frutasMixin'
import usuarioMixin from './mixins/usuarioMixin'
export default {
	components: {FrutaComponent},
	mixins: [FrutasMixin,usuarioMixin],
	data() {
		return {
			cpfAluno: '08723457124',
			// oq está dentro do componente tem prioridade do que o mixin
			frutas: ['banana']
		}
		
	},
	filters: {
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')

		}
	},
	created() {
        console.log("Created - APP.vue")
    },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
