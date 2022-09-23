<template>
  <q-page
    class="h-[100vh] bg-[#B18BEF] flex justify-center items-center w-full"
  >
    <div class="flex-col flex justify-center items-center space-y-5 w-full">
      <span class="text-[35px]">Transaction History</span>

      <div
        class="q-pa-md rounded-[20px] h-[500px] w-full max-w-[950px] space-y-5 mb-10"
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
        <div class="flex-row space-y-5">
          <q-btn color="red" icon="arrow_back" no-caps
            ><span class="px-10">Back</span></q-btn
          >
        </div>
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
    fat: "Payment",
    carbs: "Mar 20, 2021",
    protein: "-450 Baht",
    status: "Pending",
  },
  {
    name: "Recharge failed",
    fat: "Refund",
    carbs: "Mar 20, 2021",
    protein: "+1000 Baht",
    status: "completed",
  },
  {
    name: "Top up game rov",
    fat: "Payment",
    carbs: "Mar 20, 2021",
    protein: "-1000 Baht",
    status: "rejected",
  },
  {
    name: "Give away free points",
    fat: "Credit",
    carbs: "Mar 19, 2021",
    protein: "+ 10 B",
    status: "Pending",
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
