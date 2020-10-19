<template>
  <v-app>
    <v-app-bar
      app
      color="orange darken-1"
      dark
    >
      <v-toolbar-title>Geek Store</v-toolbar-title>
    </v-app-bar>
    <!-- <v-main>
      <router-view/>
    </v-main> -->

     <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
