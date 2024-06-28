<template>
  <header>
    <h1>헤더입니다.</h1>
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About Me</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><span @click="$router.push('/Gallery')">Gallery(내장 라우트 객체 이용)</span></li>
      <li><button @click="gogo">Contact</button></li>
    </ul>
  </header>
</template>

<script setup>
import {useRouter} from 'vue-router'
const RR = useRouter(); //라우트객체 생성

const gogo = ()=>{
  RR.push('/Contact');
}

</script>

<style lang="scss" scoped>
  header{
    max-width: 1000px;
    margin: auto;
    display: flex;

  }

  .nav{
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  li{
    margin-right: 20px;
  }
</style>