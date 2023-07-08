<template>

  <v-card
        :title="album.title"
        style="margin-bottom: 20px"
    >
      <v-card-actions>
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="hideAndShowPhotos"
        ></v-btn>
      </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <transition name="slide-fade">
          <photo-list
              v-if="!isPhotosLoading"
              :photos="photos"
          >

          </photo-list>
          <div v-else>Идет загрузка...</div>
        </transition>
      </div>
    </v-expand-transition>
    </v-card>
</template>

<script>
import axios from "axios";
import PhotoList from "@/components/PhotoList.vue";

export default {
  components: {PhotoList},
  props: {
    album: {
      type: Object,
      required: true,
    }
  },
  data(){
    return{
      photos: [],
      show: false,
      isPhotosLoading: false
    }
  },
  methods: {
    hideAndShowPhotos(){
      this.show = !this.show;
      if (!this.photos?.length){
        this.getPhotos()
      }
    },
    getPhotos() {
      try {
        this.isPhotosLoading = true;
        setTimeout(async() => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
          params: {
            albumId: this.album.id
          }
        })
          this.photos = response.data;
          this.isPhotosLoading = false;
        }, 500)


      }
      catch (err) {
        console.log(err);
      }
    }
  },


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