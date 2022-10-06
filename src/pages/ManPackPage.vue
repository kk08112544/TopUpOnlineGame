<template>
  <q-page>
    <div class="h-[15vh] bg-[#f9b805e0] flex justify-center items-center w-full gap-5">
      <span class="text-[20px] text-red">Manage Packages</span>
    </div>
    <div class="h-[100vh] bg-[#B18BEF] flex justify-center   w-full gap-5">
       <div class="flex-col flex mt-6">
         <div class="flex-row">
          <q-table
            title="All Packages"
            :rows="rows"
            :columns="columns"
            row-key="name"
          />
         </div>
         <br>
         <div class="flex-col justify-center items-center">
            <q-btn color="red" no-caps  label="Add Package"  clickable
            v-ripple
            to="/AddPack" />
         </div>
       </div>
    </div>
  </q-page>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Package Project',
    align: 'left',
    field: row => row.name,
  },
  { name: 'calories', align: 'center', label: 'Price(Baht)', field: 'calories', sortable: true },

  { name: 'carbs', label: 'Status', field: 'carbs' },
  { name: 'sodium', label: 'In Stock', field: 'sodium' },
]

const rows = [
  {
    name: 'Valorant 500 points',
    calories: '150 Baht',
    carbs: "Visible",
    sodium: "80%",
  }

]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
