<template>
  <div>
<!--    <post-item-->
<!--        v-for="post in posts"-->
<!--        :key="post.id"-->
<!--        :post="post">-->

<!--    </post-item>-->
    <v-card
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :text="post.body"
        style="margin-top: 20px"
        variant="outlined"
    >
      <v-card-actions>
        <v-btn
            variant="outlined"
            @click="$router.push(`posts/${post.id}/comments`)"
        >
          Комментарии
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style scoped>

</style>