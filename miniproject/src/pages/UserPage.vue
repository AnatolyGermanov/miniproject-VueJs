<template>
  <div class="userPage">
    <h1>Профиль</h1>
    <v-card variant="outlined" style="margin-top: 15px">
      <user-item
          :user="user">

      </user-item>
    </v-card>
  </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue";
import {mapState} from 'vuex'

export default {
  components: {UserItem},
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      isAuth: state => state.user.isAuth,
    })
  },



}
</script>

<style scoped>
.userPage > h1 {
  text-align: center;
}

</style>