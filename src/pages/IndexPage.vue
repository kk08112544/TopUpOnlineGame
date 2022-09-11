<template>
  <q-page class="flex flex-center">
    <!--vh คือ เปอร์เซ็นต์ความสูง-->
    <div class="h-[100vh] bg-[#131313] flex w-full flex-center">
      <div class="content-center" style="max-width: 700px; max-height: 500px">
        <div class="items-center">
          <q-img
            src="icons/index.png"
            style="height: 170px; max-width: 700px; border-radius: 30px"
          />
        </div>

        <q-img src="icons/safe & easy3.png" class="q-mt-md" />
        <p class="text-center text-white">
          Easy game recharge just a few steps need this websites
        </p>
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
