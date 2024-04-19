<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <navbar>
    <div class="fz-white"></div>
    <navbtn class="group-flex-row">
      <RouterLink to="/">
        <i class="mdi mdi-account"></i>
      </RouterLink>
      <RouterLink to="/item">
        <i class="mdi mdi-hat-fedora"></i>
      </RouterLink>
    </navbtn>
  </navbar>
  
  <RouterView style="margin-top: 50px"/>
</template>