<template>
  <q-page
    class="flex justify-center items-center flex-col gap-20 bg-[#B18BEF] h-[100vh]"
  >
    <div class="flex-row flex justify-center items-center gap-20 w-full">
      <div class="flex-col flex">
        <q-img src="icons/kk2.png" class="w-[150px]" />
        <q-img src="icons/people.png" class="w-[300px]" />
      </div>
      <div class="flex-col flex">
        <!-- margin-top: 5px; -->
        <!-- margin-bottom: 10px; -->
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
          <q-btn class="flex-1" color="green" no-caps label="login" />
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
export default {
  name: "SignInPage",
};
</script>
