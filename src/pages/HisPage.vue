<template>
  <q-page
    class="h-[100vh] bg-[#B18BEF] flex justify-center items-center w-full"
  >
    <div class="flex-col flex justify-center items-center space-y-5 w-full">
      <span class="text-[35px]">Transaction History</span>

      <div
        class="q-pa-md rounded-[0px] h-[250px] w-full max-w-[550px] space-y-5 mb-6 q-pa-md row items-center q-gutter-md"
      >
        <q-table
          title="Recent Payment"
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-header
          hide-bottom
          class="bg-white/50"
        />
      </div>
      <br />
      <br />
      <div class="flex-row space-y-5 justify-center items-center">
        <q-btn color="red" no-caps icon="arrow_back" clickable v-ripple to="/"
          ><span class="px-10">Back</span>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: "name",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "status", label: "status", field: "status" },
];

const rows = [
  {
    name: "valorant 1,945 Points",
    fat: "Promptpay",
    carbs: "Mar 20, 2021",
    protein: "-450 Baht",
    status: "pending",
  },
  {
    name: "Recharge failed",
    fat: "Truemoney",
    carbs: "Mar 20, 2021",
    protein: "+1000 Baht",
    status: "pending",
  },
  {
    name: "Top up game rov",
    fat: "Paypal",
    carbs: "Mar 20, 2021",
    protein: "-1000 Baht",
    status: "pending",
  },
  {
    name: "Give away free points",
    fat: "Credit",
    carbs: "Mar 19, 2021",
    protein: "+ 10 B",
    status: "Completed",
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
</script>
