<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>
        {{ product.name }} <br>
        $ {{ product.price }}
    </v-card-title>

    <v-card-text>
        
      <div class="my-4 subtitle-1">
        <v-icon>mdi-tag</v-icon> {{ product.categories }}
      </div>
      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        Editar
      </v-btn>
      <v-btn
        color="red"
        text
        @click="deleteProduct"
      >
        Excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
        getProduct() {
            let _this = this
            _this.$store.dispatch('getProduct', _this.$route.params.id)
            .catch(() => _this.$router.push({path: '/products'}))
        },
        deleteProduct() {
            if(window.confirm('Deseja excluir produto?')) {
                let _this = this
                _this.$store.dispatch('deleteProduct', _this.$route.params.id)
                .then(() => _this.$router.push({path: '/products'}))
            }
        },
    },
    mounted() {
        this.getProduct()
    },
    computed: {
        product() {
            return this.$store.getters.productFormated
        }
    }
}
</script>