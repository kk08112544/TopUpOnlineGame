<template>
  <q-page
    class="flex justify-center items-center bg flex-col gap-20 w-full bg-[#B18BEF] h-[100vh]"
    v-if="userData"
  >
    {{ userLists }}
    <div class="flex-row">
      <span class="text-[30px]">Register</span>
    </div>
    <div class="flex-col flex gap-5 items-center justify-center">
      <div class="flex-row flex gap-3 justify-center items-center">
        <q-input
          square
          outlined
          v-model="userData.name"
          label="Enter Name"
          bg-color="white"
          class="w-[300px] t-[300px]"
        />
        <q-input
          square
          outlined
          v-model="userData.username"
          label="Enter Username"
          bg-color="white"
          class="w-[300px] t-[300px]"
        />
      </div>
      <div class="flex-row flex gap-3 justify-center items-center">
        <q-input
          square
          outlined
          v-model="userData.password"
          label="Enter Password"
          bg-color="white"
          class="w-[300px] t-[300px]"
        />
        <q-input
          square
          outlined
          v-model="comfirmPassword"
          label="Confirm Password"
          bg-color="white"
          class="w-[300px] t-[300px]"
        />
      </div>
    </div>
    <div class="flex-row">
      <q-btn color="red" no-caps
        ><span class="px-10" @click="onSignup()">Register</span></q-btn
      >
    </div>
  </q-page>
</template>
<!-- <style scoped>
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
</style> -->
<script>
import { useAuthStore } from "../stores/example-store";
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "SignUpPage",
  // {} object
  setup() {
    const authStore = useAuthStore();
    const userLists = computed(() => authStore.signupUserLists);
    const comfirmPassword = ref();
    const userData = ref({
      name: "",
      username: "",
      password: "",
    });
    const onSignup = () => {
      const payload = userData.value;
      authStore.onSignupLocal(payload);
    };
    return {
      comfirmPassword,
      userData,
      onSignup,
      userLists,
    };
  },
});
</script>
