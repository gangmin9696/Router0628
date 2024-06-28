<template>
  <div>
    <h2>About me</h2>
    <button v-on:click="$router.push('/Portfolio')"> 포트폴리오가 보고싶으시다면 클릭 </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
  background-color: lightcoral;
}
</style>