<template>
  <q-page>
    <div
      class="h-[20vh] bg-[#f9b805] flex justify-center items-center w-full gap-5"
    >
      <q-img src="icons/dashboard.png" class="w-[80px] h-[70px]"></q-img>
      <span class="text-[50px] text-black">Dashboard</span>
    </div>
    <div
      class="h-[80vh] bg-[#B18BEF] flex justify-center items-center w-full gap-5"
    >
      <!-- <div class="q-pa-md">
        <q-table
          title="Summarize"
          :rows="rows"
          :columns="columns"
          row-key="name"
          dark
          color="amber"
        />
      </div> -->
      <q-card class="my-card">
      <q-card-section class="w-[300px] h-[100px]">
         <div class="flex-col flex">
            <div class="flex-row ">
               <div class="items-start my-1">
                <span class="text-[15px]">Top-Up Total</span>
               </div>
               <div class="items-end">
                <q-img src="icons/red.png"  class="h-[5px] t-[5px]"/>

               </div>
            </div>
            <div class="flex-row my-1">
               <span class="text-[15px]">5,897</span>
            </div>
         </div>

      </q-card-section>

      </q-card>
      <q-card class="my-card">
      <q-card-section class="w-[300px] h-[100px]">
         <div class="flex-col flex">
            <div class="flex-row ">
               <div class="items-start my-1">
                <span class="text-[15px]">Top-Up Today</span>
               </div>
               <div class="items-end">
                <q-img src="icons/orange.png"  class="h-[5px] t-[5px]"/>

               </div>
            </div>
            <div class="flex-row my-1">
               <span class="text-[15px]">2,356</span>
            </div>
         </div>

      </q-card-section>

      </q-card>
      <q-card class="my-card">
      <q-card-section class="w-[300px] h-[100px]">
         <div class="flex-col flex">
            <div class="flex-row ">
               <div class="items-start my-1">
                <span class="text-[15px]">Pending</span>
               </div>
               <div class="items-end">
                <q-img src="icons/yellow.png"  class="h-[5px] t-[5px]"/>

               </div>
            </div>
            <div class="flex-row my-1">
               <span class="text-[15px]">924</span>
            </div>
         </div>

      </q-card-section>

      </q-card>
      <q-card class="my-card">
      <q-card-section class="w-[300px] h-[100px]">
         <div class="flex-col flex">
            <div class="flex-row ">
               <div class="items-start my-1">
                <span class="text-[15px]">Rejected</span>
               </div>
               <div class="items-end">
                <q-img src="icons/blue.png"  class="h-[5px] t-[5px]"/>

               </div>
            </div>
            <div class="flex-row my-1">
               <span class="text-[15px]">872</span>
            </div>
         </div>

      </q-card-section>

      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
  },
];

const rows = [
  {
    name: "Top-Up Total",
    calories: 5987,
  },
  {
    name: "Top-Up Today",
    calories: 2356,
  },
  {
    name: "Rejected",
    calories: 500,
  },
  {
    name: "Pending",
    calories: 924,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};

// export default defineComponent({
//   name: "TopUpDetailsPage",

//   // setup() {},
// });
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
