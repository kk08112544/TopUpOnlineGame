<template>
  <q-page class="flex">
    <!--vh คือ เปอร์เซ็นต์ความสูง-->
    <div class="h-[100vh] bg-[#131313] flex justify-center w-full">
      <div class="fit column items-center">
        <div
          style="
            margin-top: 30px;
            overflow: auto;
            max-width: 1200px;
            max-height: 320px;
          "
        >
          <div class="items-center">
            <div class="items-center">
              <q-img
                rounded
                src="icons/index.png"
                style="height: 170px; max-width: 700px; border-radius: 30px"
              />
            </div>
            <q-img src="icons/Safe & easy.png" class="q-mt-md" />
            <p class="text-center">
              easy game recharge just a few steps need this websites
            </p>
          </div>

          <!-- <div style="max-width: 1200px; max-height: 320px">
            <div class="col">
              <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />

                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </div>
          </div> -->
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
