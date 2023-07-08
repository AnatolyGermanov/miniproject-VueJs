<template>
  <div class="postPage">
    <h1>Посты</h1>
    <transition name="slide-fade">
      <post-list
          v-if="!isPostsLoading"
          :posts="posts">

      </post-list>
      <div v-else>Идет загрузка...</div>
    </transition>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import {mapGetters} from 'vuex'
import axios from "axios";

export default {
  components: {PostList},
  data() {
    return {
      posts: [],
      isPostsLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      userId: 'user/userId',
    })
  },
  methods: {
    async getPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            userId: this.userId
          }
        })
        this.posts = response.data;
        this.isPostsLoading = false;
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getPosts();
  }

}
</script>

<style scoped>
.postPage > h1 {
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