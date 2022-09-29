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
    data(){
        return{
            stocks: [
                {id: 1, name: 'MGLU3', price: 4.03},
                {id: 2, name: 'VALE3', price: 68.50},
                {id: 3, name: 'BBAS3', price: 31.95},
                {id: 4, name: 'TAEE11', price: 38.80},
            ]
        }
    }
}

</script>

<style>
    
</style>