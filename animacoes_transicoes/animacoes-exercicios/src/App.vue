<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar msg</b-button>
		
		<!-- appear para fazer a transicao e animacao assim que carrega a pagina (exibir = true)-->
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<!-- type por causa que o tempo entre animacao e transicao estão diferentes -->
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		
		<hr>

		<!-- Animações com CSS -->
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
			>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		
		<hr>

		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

		<hr>

		<!-- Animações com JavaScript -->
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
			>
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>

		<!-- Componente Dinamico -->
		<div class="mb-4">
			<b-button class="mr-2" variant="primary" @click="componenteSelecionado='AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado='AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>

		<hr>

		<!-- Transition Group -->
		<b-button class="mb-4" @click="adicionarAluno">Adicionar Aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno,index) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(index)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>


	</div>
</template>

<script>
import AlertaInfo from './alertas/AlertaInfo.vue'
import AlertaAdvertencia from './alertas/AlertaAdvertencia.vue'


export default {
	components: {AlertaInfo, AlertaAdvertencia},
	data(){
		return {
			alunos: ['João', 'Maria', 'Carlos', 'Antônio'],
			msg: 'Uma msg de informação para o usr!',
			exibir: false,
			exibir2: false,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno(){
			// capturar todo o alfabeto (36) e tirar o '0.' (2)
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice,1)
		},
		animar(el, done, leave){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (leave ?  (-rodada * 10) : (rodada * 10))
				el.style.width = `${novaLargura}px`
				rodada++

				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el,done){
			this.animar(el, done, false)
		},
		afterEnter(el){
			console.log('afterEnter')
		},
		enterCancelled(){
			console.log('enterCancelled')
		},

		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el,done){
			this.animar(el,done, true)
		},
		afterLeave(el){
			console.log('afterLeave')
		},
		leaveCancelled(){
			console.log('leaveCancelled')
		},

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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter{
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 3s;
}

.fade-enter-to {
	opacity: 1;
}

.fade-leave {
	opacity: 1;
}

.fade-leave-active {
	transition: opacity 4s;
}

.fade-leave-to {
	opacity: 0;
}

@keyframes slide-in{
	from {transform: translateY(40px);}
	to{transform: translateY(0);}
}

@keyframes slide-out{
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 3s ease;
	transition: opacity 4s;
}


.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 3s ease;
	transition: opacity 4s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}

</style>
