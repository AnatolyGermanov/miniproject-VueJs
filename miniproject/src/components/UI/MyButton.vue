<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  border: 1px solid lightgray;
  border-radius: 5px;
  background: midnightblue;
  padding: 5px 10px;
  margin-left: 15px;
  color: lightgray;
}

</style>