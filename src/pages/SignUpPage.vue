<template>
  <q-page
    class="flex justify-center items-center bg flex-col gap-20 w-full bg-[#B18BEF] h-[100vh]"
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
          v-model="name"
          label="Enter Name"
          bg-color="white"
          class="w-[300px] t-[300px]"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          square
          outlined
          v-model="username"
          label="Enter Username"
          bg-color="white"
          class="w-[300px] t-[300px]"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </div>
      <div class="flex-row flex gap-3 justify-center items-center">
        <q-input
          square
          outlined
          v-model="password"
          label="Enter Password"
          bg-color="white"
          class="w-[300px] t-[300px]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-input
          square
          outlined
          v-model="confirm_password"
          label=" Confirm password"
          bg-color="white"
          class="w-[300px] t-[300px]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="flex-row">
      <q-btn color="red" no-caps
        ><span class="px-10" @click="onSignup()">Register</span></q-btn
      >
    </div>
  </q-page>
</template>
<script></script>
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
import { useRouter } from "vue-router";
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "SignUpPage",
  // {} object
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const userLists = computed(() => authStore.signupUserLists);
    const comfirm = ref();

    const name = ref("");
    const username = ref("");
    const password = ref("");
    const confirm_password = ref("");

    const onSignup = async () => {
      const payload = {
        name: name.value,
        username: username.value,
        password: password.value,
      };
      await authStore.onSignupLocal(payload);
      router.push({ path: "SignIn" });
      // console.log(payload);
      // if (payload) {
      //   authStore.onSelectedUser(payload);
      //   router.push({ path: "/" });
      // } else {

      // }
    };
    return {
      comfirm,
      onSignup,
      userLists,
      name,
      username,
      password,
      confirm_password,
    };
  },
});
</script>
