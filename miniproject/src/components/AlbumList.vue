<template>
  <div>
    <album-item
        v-for="album in albums"
        :key="album.id"
        :album="album">

    </album-item>

  </div>
</template>

<script>
import AlbumItem from "@/components/AlbumItem.vue";

export default {
  components: {AlbumItem},
  props: {
    albums: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>

</style>