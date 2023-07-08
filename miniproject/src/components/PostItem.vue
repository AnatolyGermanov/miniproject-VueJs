<template>
  <div class="post">
    <div class="postId"><strong>{{post.id}}</strong></div>
    <div>
      <div><strong>Название: </strong>{{post.title}}</div>
      <div><strong>Описание: </strong>{{post.body}}</div>
    </div>
    <div
        class="post_btns"
    >
      <my-button
        @click="$router.push(`posts/${post.id}/comments`)"
      >
        Комментарии
      </my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid midnightblue;
  border-radius: 5px;
}
.postId {
  margin-right: 15px;
  text-align: center;
}

</style>