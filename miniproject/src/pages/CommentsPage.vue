<template>
  <div>
    <h1>Комментарии к посту с ID = {{$route.params.postId}}</h1>
    <transition name="slide-fade">
      <comments-list
          v-if="!isCommentsLoading"
          :comments="comments"
      >

      </comments-list>
      <div v-else>Идет загрузка...</div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import CommentsList from "@/components/CommentsList.vue";

export default {
  components: {CommentsList},
  data() {
    return {
      comments: [],
      isCommentsLoading: false,
    }
  },
  methods: {
    async getComments() {
      try {
        this.isCommentsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: {
            postId: this.$route.params.postId
          }
        })
        this.comments = response.data;
        this.isCommentsLoading = false;
      }
      catch (err)
      {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getComments()
  }

}
</script>

<style scoped>
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