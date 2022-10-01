<template>
  <q-page
    class="flex justify-center items-center bg flex-col gap-20 w-full bg-[#B18BEF] h-[100vh]"
  >
    <div class="flex-row flex justify-center items-center gap-20 w-full">
      <div class="flex-col flex">
        <q-img src="icons/kk2.png" class="w-[150px]" />
        <q-img src="icons/people.png" class="w-[300px]" />
      </div>
      <div class="flex-col flex">
        <div class="space-y-5 mb-10 text-center">
          <span class="text-[30px]">Sign In</span>
          <q-input
            size="large"
            squared
            outlined
            v-model="text"
            label="Enter Username"
            bg-color="white"
            class="w-[300px] t-[300px]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            size="large"
            squared
            outlined
            v-model="text"
            label="Enter Password"
            bg-color="white"
            class="w-[300px] t-[300px]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </div>

        <div class="flex w-full gap-3">
          <q-btn
            class="flex-1"
            color="green"
            no-caps
            label="login"
            clickable
            v-ripple
            to="/"
          />
          <q-btn
            class="flex-1"
            color="red"
            no-caps
            label="sign up"
            clickable
            v-ripple
            to="/SignUp"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useAuthStore } from "../stores/example-store";
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "SignUpPage",

  setup() {
    const authStore = useAuthStore();
    const userLists = computed(() => authStore.signupUserLists);
    const comfirm = ref();
    const userData = ref({
      name: "",
      username: "",
      password: "",
      confirm_password: "",
    });
    const onSignup = () => {
      const payload = userData.value;
      authStore.onSignupLocal(payload);
    };
    return {
      comfirm,
      userData,
      onSignup,
      userLists,
    };
  },
});
</script>
