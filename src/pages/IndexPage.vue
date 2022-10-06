<template>
  <q-page>
    <!--vh คือ เปอร์เซ็นต์ความสูง-->
    <div
      class="h-[90vh] bg-[rgb(7,6,0)] w-full text-white flex items-center justify-center"
    >
      <!-- flex-nowrap: คือการไม่ให้ Flex Item มีการดันลงมาด้านล่าง -->
      <div
        class="flex flex-row gap-10 justify-center sm:flex-nowrap p-20 w-full max-w-screen-xl"
      >
        <!-- justify-center คือ จัดให้อยู่กึ่งกลางในแนวนอน -->
        <div class="flex flex-col justify-center">
          <span class="text-[22px] md:text-[40px] p-5 sm:p-10 text-center text-white"
            >The safe & easy way to buy official game credits</span
          >
          <span class="text-[16px] text-center text-white"
            >easy game recharge just a few steps need this website</span
          >

        </div>
        <div class="flex flex-col">
          <q-img src="icons/Index.png" class="w-[200px] md:w-[350px]"></q-img>
        </div>
      </div>
    </div>
    <div
      class="bg-[#642c99] gap-10 w-full text-white flex items-center justify-center min-h-[440px] py-10 sm:py-20"
    >


      <div
        class="flex flex-col activeImage items-center"
        v-for="(item, i) in directGames"
        :key="i"
        @click="$router.push({path:item.path})"
      >
        <q-img :src="item.img" class="rounded-md mb-3" ></q-img>
        <span class="text-[20px] font-medium">{{ item.name }}</span>
      </div>
    </div>
    <div
      class="bg-[#0f0b02] gap-10 w-full text-white flex items-center justify-center min-h-[300px] py-10 sm:py-20"
    >
      <span class="text-[22px] sm:text-[40px] text-white">TOP-UP GAME CARDS</span>
    </div>
    <div
      class="bg-[#642c99] gap-10 w-full text-white flex items-center justify-center min-h-[440px] py-10 sm:py-20"
    >
      <div
        class="flex flex-col activeImage items-center"
        v-for="(item, i) in payment"
        :key="i"
      >
        <q-img :src="item.img" class="rounded-lg mb-3"></q-img>
        <span class="text-[20px] font-medium">{{ item.name }}</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "IndexPage",

  setup() {
    const directGames = [
      {
        name: "Valorant",
        img: "game_pic/valorant.png",
        path:'/TopDetails'
      },
      {
        name: "APEX",
        img: "game_pic/APEX.png",
        path:'/TopDetails'
      },
      {
        name: "Geshin",
        img: "game_pic/Genshin.png",
        path:'/TopDetails'
      },
      {
        name: "ROBLOX",
        img: "game_pic/Roblox.png",
        path:'/TopDetails'
      },
    ];
    const payment = [
      {
        name: "Garena shell",
        img: "game_pic/Garena_Shells.png",
      },
      {
        name: "Sream Wallet",
        img: "game_pic/steam_wallet.png",
      },
      {
        name: "True money",
        img: "game_pic/true_money.png",
      },
      {
        name: "@Cash",
        img: "game_pic/cash.png",
      },
    ];
    return { directGames, payment };
  },
});
</script>

<style scoped>
.activeImage {
  width: 250px;
  transition: 0.2s ease-out;
}
.activeImage:hover {
  width: 300px;
}
.linear-gradient {

}
</style>
