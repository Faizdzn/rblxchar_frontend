<template>
    <div class="group-flex-phone" style="gap: 50px">
      <div class="group-flex-col f-1" style="gap: 20px">
        <span class="title">Welcome to Roblox Character Downloader!</span>
        <span class="desc">Hello visitors, welcome to the Roblox Character Downloader where you can download your Roblox avatar here. Also, if you want to support us you can head to donation page your donation will useful for our development progress. Thank you for visit our website!</span>
      </div>
      <div class="group-flex-col f-1">
        <div class="group-flex-row">
          <input type="text" placeholder="Type your Roblox username here!" v-model="username">
          <button class="btn" @click.prevent="downloadUser()">
            <i class="fas fa-download"></i>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
  import { ax, swalToast, downloadFile } from '@/lib/webLib.js';
  
  export default{
    data() {
      return{
        username: ''
      }
    },
    methods: {
      async downloadUser() {
        try {
          await swalToast("warning", "Please wait!");
          await downloadFile(`/api/v1/user/download3d?u=${this.username}`, `user_${this.username}.zip`)
        } catch(err) {
          //swalToast("error", err['message'])
          await swalToast("error", "Something went wrong! (user didnt exist or not found!")
        }
      }
    }
  }
</script>