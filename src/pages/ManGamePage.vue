<template>
  <q-page>
    <div
      class="h-[30vh] bg-[#f9b805e0] flex justify-center items-center w-full gap-5"
    >
      <span class="text-[20px] text-red">Manage Game</span>
    </div>
    <div class="h-[100vh] bg-[#B18BEF] flex justify-center w-full gap-5">
      <div class="flex-col flex mt-[-50px]">
        <div class="flex-row">
          <q-table
            title="All Games"
            :rows="rows"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">
                  {{ props.row.name }}
                </q-td>
                <q-td key="calories" :props="props">
                  {{ props.row.calories }}
                </q-td>
                <q-td key="carbs" :props="props">
                  {{ props.row.carbs }}
                </q-td>
                <q-td key="sodium" :props="props">
                  {{ props.row.sodium }}
                </q-td>
                <q-td key="edit" :props="props">
                  <q-btn
                    color="primary"
                    label="Edit"
                    no-caps
                    clickable
                    v-ripple
                    to="/EditGame"
                  />
                </q-td>
                <q-td key="delete" :props="props">
                  <q-btn color="red" label="Delete" no-caps />
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
        <br />
        <div class="flex-row flex justify-center items-center">
          <q-btn
            color="red"
            no-caps
            label="Add Game"
            clickable
            v-ripple
            to="/AddGame"
          />
        </div>
      </div>
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Game_Project',
    align: 'left',
    field: (row) => row.name,
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Game_id',
    field: 'calories',
    sortable: true,
  },

  { name: 'carbs', label: 'Status', field: 'carbs' },
  { name: 'sodium', label: 'In Stock', field: 'sodium' },
  { name: 'edit', label: 'In Stock', field: 'edit' },
  { name: 'delete', label: 'In Stock', field: 'delete' },
]

const rows = [
  {
    name: 'Valorant',
    calories: 123142,
    carbs: 'Visible',
    sodium: '80%',
    edit: 'edit',
    delete: 'delete',
  },
]

export default {
  setup() {
    return {
      columns,
      rows,
    }
  },
}
</script>
