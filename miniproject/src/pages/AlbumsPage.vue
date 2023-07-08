<template>
  <div class="albumPage">
    <h1>Альбомы</h1>
    <transition name="slide-fade">
      <album-list
          v-if="!isAlbumsLoading"
          :albums="albums">

      </album-list>
      <div v-else>Идет загрузка...</div>
    </transition>
  </div>
</template>

<script>

import AlbumList from "@/components/AlbumList.vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  components: {AlbumList},
  data() {
    return {
      albums: [],
      isAlbumsLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      userId: 'user/userId',
    })
  },
  methods: {
    async getAlbums() {
      try {
        this.isAlbumsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
          params: {
            userId: this.userId
          }
        })
        this.albums = response.data;
        this.isAlbumsLoading = false;
      }
      catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getAlbums();
  }

}
</script>

<style scoped>
.albumPage > h1 {
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