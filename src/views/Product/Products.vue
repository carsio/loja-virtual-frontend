<template>
    <div>
       
        <h2>Produtos  <v-btn>Novo Produto</v-btn></h2>
        <br>
        <ProductTable/>
    </div>
</template>

<script>

import ProductTable from '@/components/ProductTable'

export default {
    name: 'Products',
    components: {
        ProductTable,
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts')
        }
    },
    mounted() {
        this.getProducts()

    }
}
</script>