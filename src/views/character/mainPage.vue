<template>
    <div class="group-flex-phone" style="gap: 50px">
      <div class="group-flex-col f-1" style="gap: 20px">
        <span class="title">Welcome to Roblox Character Downloader!</span>
        <span class="desc">Hello visitors, welcome to the Roblox Character Downloader where you can download your Roblox avatar here. I decide to remaking the old character downloader, i heard your suggestion about the keys feature are "suck". Because that, i just remaking the website without keys feature for you to enjoy character downloader without limitation. Thank you for visit our website!</span>
      </div>
      <div class="group-flex-col f-1">
        <div class="group-flex-row">
          <input id="inputType" type="text" placeholder="Type your Roblox username here!" v-model="username">
          <button id="downloadBtn" aria-label="inputType" @click.prevent="downloadUser()">
            <i class="mdi mdi-download"></i>
          </button>
        </div>
      </div>
      <script type="text/javascript">
          atOptions = {
            'key' : 'a9fde42c190b12cf7ee253a2c6dccb20',
            'format' : 'iframe',
            'height' : 300,
            'width' : 160,
            'params' : {}
          };
      </script>
      <script type="text/javascript" src="//www.topcreativeformat.com/a9fde42c190b12cf7ee253a2c6dccb20/invoke.js"></script>
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
          console.error(err)
          await swalToast("error", "Something went wrong! (user didnt exist or maybe there's an error!")
        }
      }
    }
  }
</script>