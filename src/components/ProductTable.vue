<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      :hide-default-footer="true"
    >
    
      <template v-slot:[`item.name`]="{ item }">
        <router-link :to="'/products/' + item.id">
          {{ item.name }}
        </router-link>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nome',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Descrição', value: 'description' },
          { text: 'Qtd. em Estoque', value: 'qtd_in_stock' },
          { text: 'Preço', value: 'price' },
          { text: 'Categorias', value: 'categories' },          
        ],
      }
    },
    computed: {
      products() {
        return this.$store.getters.productsFormated
      }
    }
  }
</script>