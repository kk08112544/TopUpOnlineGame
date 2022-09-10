<template>
  <q-page class="flex">
    <!--vh คือ เปอร์เซ็นต์ความสูง-->
    <div
      class="h-[100vh] bg-[#F6D252] flex justify-center items-center w-full p-10"
    >
      <div class="flex flex-row items-center gap-20">
        <div class="flex-col items-center pl-10">
          <q-img src="icons/Safe & easy.png" class="w-[800px] h-[165px]" />
          <br />
          <br />
          <p class="text-center">
            easy game recharge just a few steps need this websites
          </p>
          <h1 class="text-[100px]">PLOY</h1>
          <h1 class="text-[100px]">Ploy</h1>
          <br />
          <br />
          <br />
          <div class="flex col items-center justify-center">
            <q-btn
              no-caps
              rounded
              color="red"
              label="Buy it Now"
              class="h-10 px-5 m-2 duration-150 focus:shadow-outline hover:bg-red-800"
            >
              &nbsp; &nbsp;
              <q-img src="icons/arrow.png" class="w-[15px] h-[15px]" />
            </q-btn>
          </div>
        </div>
        <div class="flex col items-center justify-center">
          <q-img src="icons/index.png" class="w-[500px] h-[500px]" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
