<template>
  <!-- hHh Lpr lff is define how your layout components (header/footer/drawer) should be placed on screen; -->
  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <LayoutHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <LayoutFooter />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";
import EssentialLink from "components/EssentialLink.vue";
const linksList = [];
export default defineComponent({
  name: "MainLayout",
  components: { LayoutHeader, LayoutFooter },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
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
