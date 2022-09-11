<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-[#131313]">
        <q-toolbar-title>
          <div class="row justify-center">
            <div class="col-12 col-md-6">
              <q-btn
                @click="drawer = !drawer"
                color="white"
                flat
                round
                dense
                icon="menu"
                class="q-mr-md"
              />

              <q-img src="icons/Top.png" class="h-[45px] w-[100px] padding" />
              <q-btn flat round icon="search" class="float-right" />
              <q-btn
                flat
                round
                icon="notifications"
                class="float-right"
              ></q-btn>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      overlay
      elevated
      class="bg-[#131313]"
    >
      <div class="column">
        <div class="col">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            style="height: 250px"
          >
            <q-carousel-slide :name="1" img-src="icons/yet.png" />
            <q-carousel-slide :name="2" img-src="icons/BestWay.png" />
            <q-carousel-slide :name="3" img-src="icons/Choose.png" />
            <q-carousel-slide :name="4" img-src="icons/Quick.png" />
          </q-carousel>
        </div>
        <div
          class="col q-gutter-xl"
          style="margin-top: auto; align-self: center"
        >
          <q-btn
            rounded
            class="btn-fixed-width"
            style="background: #ff0080; color: white"
            label="Register"
          />
          <q-btn
            rounded
            class="btn-fixed-width"
            style="background: #ff0080; color: white"
            label="Login"
          />
        </div>
      </div>
    </q-drawer>
    <router-view />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      drawer: ref(false),
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
