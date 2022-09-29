<template>
	<v-app>
		<HeaderVue/>
		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
import HeaderVue from './components/views/Header.vue';

export default {
	components: {HeaderVue}
}
</script>

<style>

</style>

