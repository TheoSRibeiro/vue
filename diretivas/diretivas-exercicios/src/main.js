import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el,binding, vnode){
		// el.style.backgroundColor = 'lightgreen'
		// el.style.backgroundColor = binding.value

		// diretiva.argumento.modificador1.modificador2.modificador3 = "valor" ou "'valor'"

		//modificador
		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000
		
		setTimeout(() => {
			// argumento
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value
			}else{
				el.style.color = binding.value
			}
		},atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
