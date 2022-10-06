<template>
  <q-page>
    <div
      class="w-full bg-[#f9b805] h-[201px] flex items-center justify-center gap-5"
    >
    <q-img src="icons/logo.png" class="w-[100px] h-[100px]"></q-img>
      <q-img src="icons/joingame.png" class="w-[50px] h-[50px]"></q-img>
      <span class="text-[50px] text-black">Game Details</span>
    </div>
    <div class="flex-row flex w-full bg gap-5 p-11 justify-center items-center">
      <div class="flex-col flex w-[300px]">
        <q-img src="game_pic/APEX.png" class="w-[300px] h-[300px]" />
        <span
          >Adding Apex Points is easy, just enter your Origin ID, select the
          desired amount of Points and make payment. Top up and receive items in
          your APEX account instantly.</span
        >
      </div>
      <div class="flex-col flex flex-1 space-y-5 mb-10">
        <div class="bg-[#FFFFFF] w-full rounded-[90px] px-14 py-8 mb-3">
          <span class="text-[35px]">Fill UID</span>
          <div class="row">
            <!-- <q-input rounded label="Your UID" type="text" outlined></q-input> -->
            <q-input square label="Your UID" type="text" outlined v-model="uid"></q-input>
            <!-- <q-btn color="primary">
              Hover
              <q-tooltip :offset="[10, 10]">
                <q-img src="game_pic/APEX.png" class="w-[300px] h-[170px]" />
              </q-tooltip>
            </q-btn> -->
          </div>
        </div>
        <div
          class="bg-[#FFFFFF] gap-10 flex items-center justify-center w-full rounded-[30px] px-14 py-8"
        >
          <div class="q-pt-none">
            <span class="text-[10px] sm:text-[20px]"
              >Select the amount you want to top up.</span
            >
          </div>

          <div
            class="amount-border p-5 flex flex-col activeCard items-center"
            v-for="(item, i) in ApexCoin"
            :key="i"
          >
            <div>
              <img class="max-h-20" :src="item.png" />

              <div>
                <span class="text-bold"
                  >{{ item.gold }} <br />{{ item.baht }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full gap-3 justify-center">
          <q-btn
            color="red"
            no-caps
            label="Add to Cart"
            type="text"
            clickable
            v-ripple
            to="/Cart"
            outlined
          ></q-btn>
          <q-btn
            color="green"
            no-caps
            label="Back"
            type="text"
            clickable
            v-ripple
            to="/"
            outlined
          ></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TopUpDetailsPage",

  setup() {
    const ApexCoin = [
      {
        png: "apex-coin/coin1.png",
        gold: "Pack 100 Gold",
        baht: "(100 Bahts)",
      },
      {
        png: "apex-coin/coin2.png",
        gold: "Pack 200 Gold",
        baht: "(200 Bahts)",
      },
      {
        png: "apex-coin/coin3.png",
        gold: "Pack 300 Gold",
        baht: "(300 Bahts)",
      },
      {
        png: "apex-coin/coin4.png",
        gold: "Pack 400 Gold",
        baht: "(400 Bahts)",
      },
    ];
    const uid=ref();
    return { ApexCoin,uid };
  },
});
</script>
<style scoped>
.activeCard {
  width: 250px;
  transition: 0.2s ease-out;
}
.activeCard:hover {
  width: 300px;
}
.bg {
  background: radial-gradient(
    249.11% 67.08% at 52.55% 46.23%,
    #6214e2 0%,
    #e2d4f9 0.01%,
    #e2d4f9 63.02%,
    #ebe1fb 73.96%,
    #f7f3fd 89.58%,
    #ffffff 100%
  );
}
.amount-border {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
