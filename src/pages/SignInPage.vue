<template>
  <q-page
    class="flex justify-center items-center   flex-col    w-full  bg-[#B18BEF] h-[100vh]"
  >
    <!-- w-full=width 100% -->
    <!-- gap-20=gap:5rem/*80px*/ -->
    <div class="flex-row flex justify-center items-center gap-20  w-full">
      <div class="flex-col flex">
        <q-img src="icons/kk2.png" class="w-[150px]" />
        <q-img src="icons/people.png" class="w-[300px]" />
      </div>
      <div class="flex-col flex">
        <!-- space-y-5 เว้นช่องไฟระหว่างsign in username password --margin-top: 0px;-- เว้นระยะห่างในแนวตั้ง>
         mb-10 เว้นระหว่างpassword กับปุ่ม -->
         <!-- mb-10 margin-bottom: 1px; -->
        <div class="space-y-5  mb-10 text-center">
          <span class="text-[30px]">Sign In</span>
          <q-input
            squared

            v-model="username"
            label=" Enter Username"
            bg-color="white"
            class="w-[300px]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            square
            v-model="password"
            label="Enter Password"
            bg-color="white"
            class="w-[300px] "
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
            @click="onLogin"
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
import { defineComponent, ref, computed } from "vue";
import { useAuthStore } from "../stores/example-store";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const userLists = computed(() => authStore.signupUserLists);
    const username = ref("");
    const password = ref("");

    const onLogin = () => {
      const test = userLists.value.find((list_User) => {
        return (
          list_User.name == username.value &&
          list_User.password == password.value
        );
      });
      console.log(test);

      if (test) {
        authStore.onSelectedUser(test);
        router.push({ path: "/" });
      } else {

      }
    };
    return { userLists, username, password, onLogin };
  },
});
</script>
