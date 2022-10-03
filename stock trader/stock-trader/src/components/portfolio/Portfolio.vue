<template>
    <v-layout row wrap>
        <StockVue v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import StockVue from './Stock.vue'

export default {
    components: {StockVue},
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}

</script>

<style>
    
</style>