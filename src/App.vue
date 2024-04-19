<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <navbar>
    <div class="fz-white"></div>
    <navbtn class="group-flex-row">
      <RouterLink to="/">
        <i class="fas fa-user"></i>
      </RouterLink>
      <RouterLink to="/item">
        <i class="fas fa-hat-cowboy"></i>
      </RouterLink>
    </navbtn>
  </navbar>
  
  <RouterView style="margin-top: 50px"/>
</template>