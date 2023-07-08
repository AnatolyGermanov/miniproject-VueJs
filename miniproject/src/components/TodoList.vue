<template>
  <div>
<!--    <todo-item-->
<!--        v-for="todo in todos"-->
<!--        :key="todo.id"-->
<!--        :todo="todo">-->
<!--    </todo-item>-->

    <v-card
        v-for="todo in todos"
        :key="todo.id"
        :title="todo.title"
        style="margin-top: 20px"
        variant="outlined"
    >
      <v-card-actions>
        <v-checkbox-btn
          v-model="todo.completed"
          class="pe-2"
          color="success"
          label="Сделано"
      >
      </v-checkbox-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {TodoItem},
  props: {
    todos: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>

</style>