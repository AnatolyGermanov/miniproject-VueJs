<template>
  <div class="main">
    <login>

    </login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  components: {Login}

}
</script>

<style scoped>
.main{
  height: 100%;
  animation: slide-fade 0.8s ease-out;
}
@keyframes slide-fade {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.main > h1 {
  text-align: center;
}

</style>