<template>
  <!-- flex-direction: column; -->
  <q-page
    class="flex justify-center items-center flex-col gap-10 bg-[#B18BEF] h-[100vh]"
  >
    <div
      class="bg-white/50 rounded-[65px] flex justify-center items-center flex-col w-full px-2 py-10 bg-shadow-custom"
    >
      <q-img src="icons/success.png" class="w-[150px] md:w-[200px]" />
      <span class="text-[22px] md:text-[40px] p-5 sm:p-10 text-center"
        >Payment Success</span
      >
      <span class="text-[20px] text-center">Your Status is Pending</span>
    </div>
    <div class="flex-row">
      <q-btn color="red" icon="arrow_back" no-caps
        ><span class="px-10">Back</span></q-btn
      >
    </div>
  </q-page>
</template>
<style scoped>
.bg-shadow-custom {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
<script></script>
