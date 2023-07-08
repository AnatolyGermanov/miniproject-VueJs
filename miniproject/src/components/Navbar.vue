<template>
  <div class="navbar">
    <div class="navbar_btns">
<!--      <my-button-->
<!--          @click="$router.push('/profile')"-->
<!--      >-->
<!--        Профиль-->
<!--      </my-button>-->
<!--      <my-button-->
<!--          @click="$router.push('/todos')"-->
<!--      >-->
<!--        Список дел-->
<!--      </my-button>-->
<!--      <my-button-->
<!--          @click="$router.push('/posts')"-->
<!--      >-->
<!--        Посты-->
<!--      </my-button>-->
<!--      <my-button-->
<!--          @click="$router.push('/albums')"-->
<!--      >-->
<!--        Альбомы-->
<!--      </my-button>-->
<!--      <my-button-->
<!--          @click="signOut"-->
<!--      >-->
<!--        Выйти-->
<!--      </my-button>-->
      <v-btn variant="outlined"
          @click="$router.push('/profile')"
      >
        Профиль
      </v-btn>
      <v-btn variant="outlined"
          @click="$router.push('/todos')"
      >
        Список дел
      </v-btn>
      <v-btn variant="outlined"
          @click="$router.push('/posts')"
      >
        Посты
      </v-btn>
      <v-btn variant="outlined"
          @click="$router.push('/albums')"
      >
        Альбомы
      </v-btn>
      <v-btn variant="outlined"
          @click="signOut"
      >
        Выйти
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations({
      setIsAuth: 'user/setIsAuth',
      setUser: 'user/setUser',
    }),

    signOut() {
      this.$router.push('/');
      this.setIsAuth(false);
      this.setUser({});
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;

  padding: 0 15px;

  height: 50px;
  background: midnightblue;
  box-shadow: 2px 2px 4px midnightblue;
}

.navbar_btns {
  margin-left: auto;
  color: lightgray;
}

.navbar_btns > button {
  margin-left: 15px;
}

</style>