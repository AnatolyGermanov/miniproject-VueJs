<template>
  <div class="todosPage">
    <h1>Список дел</h1>
    <transition name="slide-fade">
      <todo-list
          :todos="todos"
          v-if="!isTodosLoading">

      </todo-list>
      <div v-else>Идет загрузка...</div>
    </transition>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import {mapGetters} from 'vuex'
import axios from "axios";

export default {
  components: {TodoList},
  data() {
    return {
      todos: [],
      isTodosLoading: false
    }
  },
  computed: {
    ...mapGetters({
      userId: 'user/userId',
    })
  },
  methods: {
    async getTodos() {
      try {
        this.isTodosLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
          params: {
            userId: this.userId
          }
        })
        this.todos = response.data;
        this.isTodosLoading = false;
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getTodos();
  }

}
</script>

<style scoped>
.todosPage > h1 {
  text-align: center;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {

}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>