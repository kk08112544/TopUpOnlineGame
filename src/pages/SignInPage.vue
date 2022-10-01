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
            squared
            outlined
            v-model="name"
            label="Username"
            bg-color="white"
            class="w-[300px] t-[300px]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            squared
            outlined
            type="password"
            v-model="password"
            label="Password"
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
export default {
  data() {
    return {
      name: null,
      password: null,
    };
  },

  methods: {
    onSubmit() {
      console.log("click submit");
    },
    onReset() {
      this.name = null;
      this.password = null;
    },
  },
};
</script>
