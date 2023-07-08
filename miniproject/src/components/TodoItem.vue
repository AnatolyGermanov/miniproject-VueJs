<template>
  <div class="todo">
    <div class="todoId"><strong>{{todo.id}}</strong></div>
    <div>
      <div><strong>Название: </strong>{{todo.title}}</div>
      <div><strong>Завершено: </strong>{{todo.completed ? "yes" : "no"}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid midnightblue;
  border-radius: 5px;
}
.todoId {
  margin-right: 15px;
  text-align: center;
}

</style>