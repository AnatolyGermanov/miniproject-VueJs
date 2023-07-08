<template>
  <div class="photos">
    <photo-item
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
    >

    </photo-item>
  </div>
</template>

<script>
import PhotoItem from "@/components/PhotoItem.vue";

export default {
  components: {PhotoItem},
  props: {
    photos: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
.photos {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

</style>