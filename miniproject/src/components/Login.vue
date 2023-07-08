<template>
  <div class="login">
    <form @submit.prevent>
      <h2>Авторизация</h2>
<!--      <label>Имя пользователя</label>-->
<!--      <my-input-->
<!--          v-model="username"-->
<!--          required-->
<!--          type="text"-->
<!--          placeholder="Имя пользователя"-->
<!--      >-->
<!--      </my-input>-->

<!--      <label>Электронная почта</label>-->
<!--      <my-input-->
<!--          v-model="email"-->
<!--          required-->
<!--          type="email"-->
<!--          placeholder="Электронная почта"-->
<!--      >-->
<!--        -->
<!--      </my-input>-->

<!--      <my-button-->
<!--          style="margin-left: auto"-->
<!--          @click="Auth"-->
<!--      >-->
<!--        Авторизоваться-->
<!--      </my-button>-->

      <v-text-field
      label="Имя пользователя"
      hide-details="auto"
      style="width: 100%; margin-bottom: 10px"
      v-model="username"
      required
      autofocus
      >

      </v-text-field>
      <v-text-field
      label="Электронная почта"
      hide-details="auto"
      style="width: 100%; margin-bottom: 10px"
      v-model="email"
      required
      >

      </v-text-field>
      <v-btn variant="outlined"
        style="margin-left: auto"
        @click="Auth"
      >
        Авторизоваться
      </v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      username: '',
      email: ''
    }
  },
  methods: {
    async Auth() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          params: {
            username: this.username,
            email: this.email
          }
        })
        if (response.data.length > 0) {
          this.setIsAuth(true);
          this.setUser(response.data[0]);
          this.$router.push('/profile');
        }
      }
      catch (err) {
        console.log(err)
      }
    },
    ...mapMutations({
      setIsAuth: 'user/setIsAuth',
      setUser: 'user/setUser'
    })
  },
}
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  margin: 0 auto 20px auto;
}

form {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 300px;
  border-radius: 2px;
  background-color: midnightblue;
  color: lightgray;
}

</style>