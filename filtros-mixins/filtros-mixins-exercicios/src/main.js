import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('')
})

// MIXIN GLOBAL > MIXIN > MIXIN DO COMPONENTE
Vue.mixin({
	data(){
		return {
			// todos os componentes tem acesso a esses dados globais
			global: 'Mixin Global!'
		}
	},
	created(){
		console.log("Created - Mixin Global!")
	}
})

new Vue({
	render: h => h(App),
	created(){
		console.log("Created - Vue Instance!")
	}
}).$mount('#app')
