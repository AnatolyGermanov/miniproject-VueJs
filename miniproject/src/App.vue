<template>
  <v-app>
    <navbar v-if="isAuth"></navbar>
    <div class="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import {mapState} from 'vuex'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      isAuth: state => state.user.isAuth,
    })
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  height: 100vh;
  padding: 20px;
}

</style>