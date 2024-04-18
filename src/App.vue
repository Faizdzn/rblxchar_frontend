<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="navbar">
    <div class="fz-white"></div>
    <div class="group-flex-row">
      <RouterLink class="btn nav-btn" to="/">
        <i class="fas fa-download"></i>
      </RouterLink>
      <!--<RouterLink class="btn donate-btn" to="/donate">-->
      <!--  <i class="fas fa-coins"></i>-->
      <!--  Donate-->
      <!--</RouterLink>-->
    </div>
  </div>
  
  <RouterView style="margin-top: 50px"/>
</template>