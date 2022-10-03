<template>
    <!-- row wrap -> quebra a linha quando atingir o val max -->
    <v-layout row wrap>
        <StockVue v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import StockVue from './Stock';

export default {
    components: {StockVue},
    computed: {
        stocks(){
            return this.$store.getters.stocks
        }
    }
}

</script>

<style>
    
</style>