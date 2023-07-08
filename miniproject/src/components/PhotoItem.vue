<template>
  <div class="photo">
    <v-img
        :src="photo.thumbnailUrl"
        width="150px"
        height="150px"
        cover
    >

    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>
.photo {
  margin: 0 10px 10px 0;
}

</style>