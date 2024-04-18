<template>
  <div v-if="download == null" class="group-flex-phone" style="gap: 30px">
    <div class="group-flex-col f-1">
      <div class="skeleton" style="height: 90px"></div>
    </div>
    <div class="group-flex-col f-1">
      <div class="skeleton" style="height: 450px"></div>
    </div>
  </div>
  <div v-else class="group-flex-phone" style="gap: 30px">
    <div class="group-flex-col f-1">
      <div class="pb">
        <div class="group-flex-row" style="gap: 20px">
          <img :src="detail.imageUrl" width="75" style="background: #404040; border-radius: 10px; padding: 10px">
          <div class="group-flex-col" style="gap: 5px">
            <span class="subtitle">{{detail.name}}</span>
            <span class="desc">@{{detail.displayName}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="group-flex-col f-1">
      <div class="pb">
        <span class="subtitle">
          <i class="mdi mdi-cube-outline"></i>
          Object Files
        </span>
        <hr>
        <div id="geometry" class="group-flex-col" style="gap: 10px">
          <div class="bb">
            <div class="group-flex-row" style="gap: 20px">
              <div class="group-flex-col" style="background: #404040; border-radius: 10px; padding: 10px; justify-content: center; align-items: center; font-size: 35px; width: 50px; height: 50px;">
                <i class="mdi mdi-file"></i>
              </div>
              <div class="group-flex-col">
                <span class="subtitle">OBJ File</span>
                <span class="desc">{{download.obj}}</span>
                <div class="bottom">
                  <button @click.prevent="downloadUrl(download.obj)" class="btn" style="margin-top: 20px">
                    <i class="mdi mdi-download"></i>
                    Download File
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bb">
            <div class="group-flex-row" style="gap: 20px">
              <div class="group-flex-col" style="background: #404040; border-radius: 10px; padding: 10px; justify-content: center; align-items: center; font-size: 35px; width: 50px; height: 50px;">
                <i class="mdi mdi-file"></i>
              </div>
              <div class="group-flex-col">
                <span class="subtitle">MTL File</span>
                <span class="desc">{{download.mtl}}</span>
                <div class="bottom">
                  <button @click.prevent="downloadUrl(download.mtl)" class="btn" style="margin-top: 20px">
                    <i class="mdi mdi-download"></i>
                    Download File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="texture" class="group-flex-col" style="gap: 10px">
          <div class="bb" v-for="(data) in download.tex">
            <div class="group-flex-row" style="gap: 20px">
              <img :src="api+data" width="50" height="50" style="background: #404040; border-radius: 10px; padding: 10px">
              <div class="group-flex-col">
                <span class="subtitle">Texture File</span>
                <span class="desc">{{data}}</span>
                <div class="bottom">
                  <button @click.prevent="downloadUrl(data)" class="btn" style="margin-top: 20px">
                    <i class="mdi mdi-download"></i>
                    Download File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '@/lib/web.json';
  import { ax, swalToast, downloadFile } from '@/lib/webLib.js';
  
  export default {
    data() {
      return {
        api: config.apiUrl,
        detail: null,
        download: null,
        username: this.$route.params.username
      }
    },
    mounted() {
      this.downloadUser();
      this.getUserDetail();
    },
    methods: {
      async downloadUrl(url) {
        await downloadFile(url)
      },
      
      async getUserDetail() {
        try {
          const { data } = await ax.get(`/api/v1/user/detail?u=${this.username}`);
          
          this.detail = data['data'];
        } catch(err) {
          swalToast("error", err.response.data['error']['message'])
        }
      },
      
      async downloadUser() {
        try {
          const { data } = await ax.get(`/api/v1/user/download3d?u=${this.username}`);
          
          this.download = data['data'];
          swalToast("success", data['message'])
        } catch(err) {
          swalToast("error", err.response.data['error']['message'])
        }
      }
    }
  }
</script>