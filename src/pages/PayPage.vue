<template>
  <q-page>
    <!-- <div class="flex items-center flex-col gap-20 bg-[#B18BEF] h-[100vh]">
      <div
        class="bg-white/50 rounded-[65px] flex justify-center items-center bg-shadow-custom flex-col w-full px-2 py-10"
      >
        <span class="text-[15px]">Payment Method</span>
        <div class="flex-row flex"></div>
        <div></div>
        <div></div>
        <div class="flex-row flex">
          <div class="flex-col flex"></div>
          <div class="flex-col flex"></div>
        </div>
        <div></div>
      </div>
    </div> -->
    <div
      class="flex justify-center items-center flex-col gap-10 bg-[#B18BEF] h-[100vh]"
    >
      <!-- <div
        class="bg-white/50 rounded-[65px] flex justify-center items-center bg-shadow-custom flex-col w-full px-2 py-10"
      >
        <span class="text-[15px]">Payment Method</span>
        <div class="flex-row flex gap-4">
          <div class="flex-col flex">
            <q-img src="pay/credit.png" class="w-[48px] h-[37px]"></q-img>
          </div>
          <div class="flex-col flex">
            <q-img src="pay/paypal.png" class="w-[139px] h-[78px]"></q-img>
          </div>
          <div class="flex-col flex">
            <q-img src="pay/promptpay.png" class="w-[170px] h-[62px]"></q-img>
          </div>
          <div class="flex-col flex">
            <q-img src="pay/truemoney.png" class="w-[140px] h-[70px]"></q-img>
          </div>
        </div>
        <span class="text-[12px]">Payment Details</span>
        <div>
          <q-input></q-input>
        </div>
        <div></div>
        <div class="flex-row flex">
          <div class="flex-col flex"></div>
          <div class="flex-col flex"></div>
        </div>
        <div></div>
      </div> -->
      <div
        class="bg-white/50 rounded-[20px] gap-10 flex items-center justify-center w-full rounded-[30px] px-14 py-8"
      >
        <div class="q-pt-none">
          <span class="text-[10px] sm:text-[20px]">Select the Payment.</span>
        </div>

        <div
          class="amount-border p-5 flex flex-col activeCard items-center"
          v-for="(item, i) in Pay"
          :key="i"
        >
          <div>
            <img class="max-h-10" :src="item.png" />

            <div>
              <span class="text-bold"
                >{{ item.gold }} <br />{{ item.baht }}</span
              >
            </div>
          </div>
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
    const Pay = [
      {
        png: "pay/credit.png",
      },
      {
        png: "pay/paypal.png",
      },
      {
        png: "pay/promptpay.png",
      },
      {
        png: "pay/truemoney.png",
      },
    ];
    return { Pay };
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
Footer © 2022 GitHub, Inc. Footer navigation Terms Privacy
