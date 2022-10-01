<template>
  <q-form>
    <q-input
      outlined
      v-model="formData.visa"
      label="Enter name on Card(Visa)"
      v-if="tab == 'credit'"
    />
    <br />
    <q-input
      outlined
      v-model="formData.card"
      label="Card Number"
      v-if="tab == 'credit'"
    />
    <br />
    <q-input
      outlined
      v-model="formData.card"
      label="Experation"
      v-if="tab == 'credit'"
    />
    <br />
    <q-input
      outlined
      v-model="formData.card"
      label="CVV code"
      v-if="tab == 'credit'"
    />
    <br />
    <div class="text-center" v-if="tab == 'promptpay'">
      <span class="text-[30px]">099-487-4865</span><br />
      <span class="text-[30px]">Mr.Suwara Songthong</span><br />
    </div>
    <div v-if="tab == 'promptpay'">
      <q-file
        v-model="upload_Avatar"
        label="Slip"
        max-file-size="1048576"
        accept=".jpg, .jpeg ,.png"
        @rejected="onRejected"
        @update:model-value="uploadFile()"
      >
        <template #append>
          <q-icon name="attach_file" />
        </template>
      </q-file>
    </div>
    <br />
    <div class="row">
      <q-btn
        color="red"
        no-caps
        label="Confirm"
        clickable
        v-ripple
        to="/Status"
      ></q-btn>
    </div>
  </q-form>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        visa: "",
        card: "",
      },
    };
  },
};
</script>
