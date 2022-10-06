<template>
   <q-page
    class="flex justify-center items-center flex-col gap-10 bg-[#B18BEF] h-[100vh]"
  >
    <div
      class="bg-white/50 rounded-[65px] flex justify-center items-start flex-col w-full px-2 py-10 bg-shadow-custom space-y-4"
    >

       <div class=""><span class="text-[25px] ml-10">Payment Methods</span></div>
       <div class="flex-row flex gap-7 ml-20 space-x-4">
          <div class="flex-col items-start">
             <q-img src="pay/credit.png" class="w-[48px] h-[37px]"></q-img>
          </div>
          <!-- <div class="flex-col items-start">
             <q-img src="pay/promptpay.png" class="w-[174px] h-[58px]"></q-img>
          </div>
          <div class="flex-col items-start">
             <q-img src="pay/truemoney.png" class="w-[82px] h-[62px]"></q-img>
          </div>
          <div class="flex-col items-start">
             <q-img src="pay/paypal.png" class="w-[112px] h-[55px]"></q-img>
          </div> -->
       </div>
       <div class=""><span class="text-[20px] ml-10">Payment Details</span></div>
       <!-- Credit Card -->
       <div class="flex-row flex ml-10">
        <q-input
        rounded outlined
            v-model="name"
            label=" Enter name on card"
            bg-color="white"
            class="w-[300px] t-[250px]"
        >
        <template v-slot:prepend>
          <q-img src="icons/visa.png" class="h-[36px] w-[74px]"/>

        </template>

        </q-input>
       </div>
       <div class="flex-row flex ml-10">
        <q-input
        rounded outlined
            v-model="cardnum"
            label="Card Number"
            bg-color="white"
            class="w-[310px] t-[300px]"
        >
        </q-input>
       </div>
       <div class="flex-row flex ml-10 gap-9">
        <q-input
        rounded outlined
            v-model="experate"
            label="Experation"
            bg-color="white"
            class="w-[250px] t-[200px]"
        >
        </q-input>
        <q-input
        rounded outlined
            v-model="cvv"
            label="CVV Code"
            bg-color="white"
            class="w-[300px] t-[250px]"
        >
        </q-input>
       </div>
       <!-- TrueMoney -->
       <!-- <div class="flex-row flex ml-10 gap-5">
         <div class="flex-col flex">
          <q-input  class="w-[250px] t-[50px]"  rounded outlined v-model="text" label="Enter mobile number" bg-color="white" />

        </div>
         <br>
         <div class="flex-col flex">
          <q-btn color="red" text-color="white" no-caps label="sent" class="w-[70px] h-[30px]" />
        </div>
       </div>
       <div class="flex-col flex ml-10 ">
          <q-input  class="w-[200px] h-[50px]"  rounded outlined v-model="text" label="OTP" bg-color="white" />
       </div> -->
       <!-- PayPal -->
       <!-- <div class="flex row-flex ml-10 gap-5">
          <q-input class="w-[320px] h-[50px]" rounded outlined bg-color="white" v-model="text" type="text" label="Enter your email or ID user" />
       </div>
       <div class="flex row-flex ml-10 gap-5">
          <q-input class="w-[270px] h-[50px]" rounded outlined bg-color="white" v-model="text" type="text" label="name" />
          <q-input class="w-[300px] h-[50px]" rounded outlined bg-color="white" v-model="text" type="text" label="Lastname" />
       </div> -->
       <!-- promptpay -->
       <div class="flex row-flex ml-10">
        <!-- <div class="flex-col flex gap-5 ">
           <q-img src="pay/header.png" class="w-[150px] ml-14" />
           <q-img src="pay/qrcode.png" class="w-[200px] h-[150px] ml-7" />
        </div> -->
        <!-- <div class="flex-col flex space-y-5  mb-10">
            <div class="flex row-flex">
               <q-input class="w-[270px] h-[50px]" v-model="text " rounded outlined bg-color="white" type="text" label="payment date" />
            </div>
            <div class="flex row-flex">
               <q-input class="w-[270px] h-[50px]" v-model="text" rounded outlined bg-color="white" type="text" label="time of payment" />
            </div>
            <div class="flex row-flex">
               <q-input class="w-[270px] h-[50px]" v-model="text" rounded outlined bg-color="white" type="text" label="amount" />
            </div>
            <div class="flex row-flex">

            </div>
        </div> -->

        </div>

       <span class="text-[10px] ml-10">BY clicking "Confirm Payment" I agree to the components term of services</span>
       <div class="ml-10">
            <q-btn color="red" no-caps  label="Confirm"  clickable
            v-ripple
            to="/Status" />
       </div>
    </div>
  </q-page>
</template>
<script>


</script>
