<template>
  <v-card
      variant="outlined"
      style="padding: 15px;margin-top: 15px;"
  >
    <div><strong>От кого: </strong>{{comment.email}}</div>
    <div><strong>Тема: </strong>{{comment.name}}</div>
    <div><strong>Описание: </strong>{{comment.body}}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

</style>