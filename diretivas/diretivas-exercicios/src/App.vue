<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<!-- <p v-destaque>Usando diretiva personalizada</p> -->
		<p v-destaque="'red'">Usando diretiva personalizada</p>
		<p v-destaque.atrasar="cor">Usando diretiva personalizada</p>

		<!-- <p v-nome:argumento.mod1.mod2.mod3="'valor'"></p> -->
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
		
		<hr>

		<p v-destaque-local="'red'">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.atrasar.alternar="cor">Usando diretiva personalizada</p>

		<hr>

		<p v-destaque-local:fundo.atrasar2.alternar2="{corA: 'green', corB: 'red', atraso2: 2000, intervalo: 200}">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar2="{corA: 'red', atraso2: 5000}">Usando diretiva personalizada</p>


	</div>
</template>

<script>
export default {
	components: {

	},
	directives: {
		'destaque-local':{
			bind(el,binding, vnode){
				// diretiva.argumento.modificador1.modificador2.modificador3 = "valor" ou "'valor'"

				const aplicarCor = cor => {
					// argumento
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					}else{
						el.style.color = cor
					}
				}

				//modificador
				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = 3000

				//cor recebida
				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1
				
				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					}else{
						aplicarCor(binding.value)
					}
				},atraso)

				let atraso2 = 0
				if(binding.modifiers['atrasar2']) atraso2 = binding.value.atraso2
				const corA = binding.value.corA
				const corB = binding.value.corB
				let corAtual2 = corA

				setTimeout(() => {
					if(binding.modifiers['alternar2']) {
						setInterval(() => {
							corAtual2 = corAtual2 === corA ? corB : corA
							aplicarCor(corAtual2)
						}, binding.value.intervalo)
					}else{
						aplicarCor(binding.value.corA)
					}
				},atraso2)

			}
		}
	},
	data(){
		return {
			cor: 'green'
		}
	}
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
</style>
