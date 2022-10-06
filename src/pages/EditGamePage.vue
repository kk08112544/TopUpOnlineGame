<template>
  <q-page>
    <div class="h-[15vh] bg-[#f9b805e0] flex justify-center items-center w-full gap-5">
      <span class="text-[20px] text-red">Edit Games</span>
    </div>
    <div class="h-[100vh] bg-[#B18BEF] flex justify-center w-full gap-5 ">
         <q-card class="my-card mt-8 mb-6">


          <q-card-section>
            <q-input square outlined v-model="text" label="Project Game" />

          </q-card-section>
          <q-card-section>
            <q-input square outlined v-model="text" label="Game_id" />
          </q-card-section>

          <q-card-section>
            <q-input square outlined v-model="text" label="Status" />
          </q-card-section>
          <q-card-section>
            <q-input square outlined v-model="text" label="In Stock" />
          </q-card-section>
          <q-card-section>
            <q-file
            standout v-model="upload_avatar"
            label="Game Image"
            max-file-size="1048576"
            accept=".jpg, .jpeg, .png"
            @rejected="onRejected"
            @update:model-value="uploadFile()"
          >
            <template #append>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          </q-card-section>
           <q-btn color="red" class="ml-10" text-color="white" no-caps label="Update" clickable
            v-ripple
            to="/ManGame" />
           <q-btn color="green" class="ml-10" text-color="white" no-caps label="Back" clickable
            v-ripple
            to="/ManGame" />

         </q-card>

    </div>
  </q-page>
</template>

