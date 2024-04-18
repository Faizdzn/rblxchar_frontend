<template>
  <div class="group-flex-phone" style="gap: 50px">
    <div class="group-flex-col f-1" style="gap: 20px">
      <span class="title">Donate us!</span>
      <span class="desc">If you want to support our development, you can send us a donation. We didnt care how much the robux you have to donate, we only care about what community wanted this website really better than ever. Your donation really needed for our development. Thank you!</span>
      <span class="desc">If you already donate, please make sure for report it to admin and admin will grant you the exclusive discord role for it!</span>
    </div>
    <div class="group-flex-col f-1">
      <div class="pb">
        <span class="subtitle">Total Donation:</span>
        <div v-if="groupData == null" class="skeleton"></div>
        <span v-else class="desc">R$ {{groupData.fund['totalRobux']}}</span>
      </div>
      <div class="pb">
        <div v-if="groupData == null" class="skeleton" style="height: 125px" v-for="n in 5" :key="n"></div>
        <div v-else v-for="(data) in groupData.shop" class="bb">
          <div class="group-flex-row" style="gap: 20px">
            <img :src="data.imageUrl" width="75" height="75" style="background: #404040; border-radius: 10px; padding: 10px">
            <div class="group-flex-col">
              <span class="subtitle">{{data.item_name}}</span>
              <span class="desc">R$ {{data.price}}</span>
              <div id="btn">
                <a :href="`https://roblox.com/catalog/${data.id}/`" style="text-decoration: none">
                  <button class="btn" style="margin-top: 20px">
                    <i class="fas fa-link"></i>
                    View on Roblox
                  </button>
                </a>
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
  import { ax, swalToast } from '@/lib/webLib.js';
  
  export default{
    data() {
      return{
        groupData: null,
      }
    },
    mounted() {
      this.getGroupItems()
    },
    methods: {
      async getGroupItems() {
        try {
          const { data } = await ax.get("/api/v1/group/detail");
          
          this.groupData = data['data'];
        } catch(err) {
          swalToast("error", err.response.data['error']['message'])
        }
      }
    }
  }
</script>