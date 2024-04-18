<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="navbar">
    <div class="fz-white"></div>
    <div class="group-flex-row">
      <RouterLink class="btn nav-btn" to="/">
        <i class="fas fa-user"></i>
      </RouterLink>
      <RouterLink class="btn nav-btn" to="/item">
        <i class="fas fa-hat-cowboy"></i>
      </RouterLink>
    </div>
  </div>
  
  <RouterView style="margin-top: 50px"/>
</template>