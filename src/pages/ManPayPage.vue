<template>
  <q-page>
    <div class="h-[15vh] bg-[#f9b805e0] flex justify-center items-center w-full gap-5">
      <span class="text-[20px] text-red">Manage Payment</span>
    </div>
    <div class="h-[100vh] bg-[#B18BEF] flex justify-center   w-full gap-5">
       <div class="flex-col flex mt-6">
         <div class="flex-row">
          <q-table
            title="Payment Manage"
            :rows="rows"
            :columns="columns"
            row-key="name"
          />
         </div>
         <br>
         <div class="flex-col justify-center items-center">
            <q-btn color="red" no-caps  label="Add Payment"  clickable
            v-ripple
            to="/AddPay" />
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
    label: 'Payment Project',
    align: 'left',
    field: row => row.name,
  },
  { name: 'calories', align: 'center', label: 'Payment Details', field: 'calories', sortable: true },
]

const rows = [
  {
    name: 'Truemoney',
    calories: '061-345-3424',
    carbs: "Normal",

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
