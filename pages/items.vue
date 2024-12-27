<script setup>
import { ref } from 'vue';

const itemId = ref('');
const itemLogo = ref(null);
const itemTags = ref('');
const itemPrice = ref(0);
const itemDiscount = ref(0);
const expiryDate = ref('');
const maniDate = ref('');
const netWeight = ref('');
const noPieces = ref(0);
const modelName = ref('');
const itemType = ref('');
const pack = ref('');
const description = ref('');
const status = ref('Active');
const sellerId = ref('');
const brandLinkage = ref('');
const categoriesLinkage = ref('');
const loading = ref(false);
const isFocused = ref(false);
const isFileFocused = ref(false);
const isFocus = ref(false);
const pinCode = ref('Select PinCode');

const handleSubmit = () => {
  loading.value = true;
  const newItem = {
    itemId: itemId.value,
    itemLogo: itemLogo.value,
    itemTags: itemTags.value,
    itemPrice: itemPrice.value,
    itemDiscount: itemDiscount.value,
    expiryDate: expiryDate.value,
    maniDate: maniDate.value,
    netWeight: netWeight.value,
    noPieces: noPieces.value,
    modelName: modelName.value,
    itemType: itemType.value,
    pack: pack.value,
    description: description.value,
    isActive: isActive.value,
    sellerId: sellerId.value,
    brandLinkage: brandLinkage.value,
    categoriesLinkage: categoriesLinkage.value,
    pinCode: pinCode.value,
  };

  console.log("New Item Submitted", newItem);

  setTimeout(() => {
    loading.value = false;
    alert("Item submitted successfully!");
  }, 1000);
};

const handleFileChange = (e) => {
  itemLogo.value = e.target.files[0];
};

const handleItemIdChange = (e) => {
  itemId.value = e.target.value;
};

const handleItemTagsChange = (e) => {
  itemTags.value = e.target.value;
};

const handlePriceChange = (e) => {
  itemPrice.value = parseFloat(e.target.value) || 0;
};

const handleDiscountChange = (e) => {
  itemDiscount.value = parseFloat(e.target.value) || 0;
};

const handleExpiryDateChange = (e) => {
  expiryDate.value = e.target.value;
};

const handleManiDateChange = (e) => {
  maniDate.value = e.target.value;
};

const handleNetWeightChange = (e) => {
  netWeight.value = e.target.value;
};

const handleNoPiecesChange = (e) => {
  noPieces.value = parseInt(e.target.value) || 0;
};

const handleModelNameChange = (e) => {
  modelName.value = e.target.value;
};

const handleItemTypeChange = (e) => {
  itemType.value = e.target.value;
};

const handlePackChange = (e) => {
  pack.value = e.target.value;
};

const handleDescriptionChange = (e) => {
  description.value = e.target.value;
};

const handleIsActiveChange = (e) => {
  isActive.value = e.target.value;
};

const handleSellerIdChange = (e) => {
  sellerId.value = e.target.value;
};

const handleBrandLinkageChange = (e) => {
  brandLinkage.value = e.target.value;
};

const handleCategoriesLinkageChange = (e) => {
  categoriesLinkage.value = e.target.value;
};
</script>

<template>
  <div class="h-screen overflow-y-auto bg-slate-100 p-8">
    <div class="flex justify-between mb-6">
      <div class="flex flex-row text-white items-center gap-2">
        <div class="bg-green-900 rounded-full p-4 flex">
          <Icon size="35" name="mdi:invoice-line-items-outline"/>
        </div>
        <div class="text-green-800 flex flex-col gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Items</span>
        </div>
      </div>
      <div class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
          <Correct />
        </div>
    </div>
    <form @submit.prevent="handleSubmit" class=" justify-between grid grid-cols-3 gap-5 p-8 text-green-800">
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Item ID</label>
        <input v-model="itemId" @input="handleItemIdChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Item ID" />
      </div>
      
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Item Logo URL</label>
        <input @input="handleFileChange" @focus="isFileFocused = true" @blur="isFileFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFileFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Logo URL" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Item Tags</label>
        <input 
          v-model="itemTags" 
          @input="handleItemTagsChange" 
          @focus="isTagsFocused = true" 
          @blur="isTagsFocused = false"
          :class="[
            'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
            isTagsFocused ? 'shadow-sm  shadow-green-600' : 'hover:shadow-sm  hover:shadow-green-600'
          ]" 
          placeholder="Comma-separated tags" 
        />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Price</label>
        <input 
          type="number" 
          v-model="itemPrice" 
          @input="handlePriceChange" 
          @focus="isPriceFocused = true" 
          @blur="isPriceFocused = false"
          :class="[
            'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
            isPriceFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600'
          ]" 
          placeholder="Price" 
        />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Discount</label>
        <input 
          type="number" 
          v-model="itemDiscount" 
          @input="handleDiscountChange" 
          @focus="isDiscountFocused = true" 
          @blur="isDiscountFocused = false"
          :class="[
            'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
            isDiscountFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600'
          ]" 
          placeholder="Discount" 
        />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Manufacturing Date</label>
        <input type="date" v-model="maniDate" @input="handleManiDateChange" class="border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Expiry Date</label>
        <input type="date" v-model="expiryDate" @input="handleExpiryDateChange" class="border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Net Weight</label>
        <input 
          type="number" 
          v-model="netWeight" 
          @input="handleNetWeightChange" 
          @focus="isWeightFocused = true" 
          @blur="isWeightFocused = false"
          :class="[
            'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
            isWeightFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600'
          ]" 
          placeholder="Net Weight" 
        />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">No. of Pieces</label>
        <input 
          type="number" 
          v-model="noPieces"  
          @input="handleNoPiecesChange" 
          @focus="isNoPiecesFocused = true" 
          @blur="isNoPiecesFocused = false"
          :class="[
            'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
            isNoPiecesFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600'
          ]" 
          placeholder="No. of Pieces" 
        />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Model Name</label>
        <input v-model="modelName" @input="handleModelNameChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Model Name" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Type</label>
        <input v-model="itemType" @input="handleItemTypeChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Type" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Pack</label>
        <input v-model="pack" @input="handlePackChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Pack" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Description</label>
        <textarea v-model="description" @input="handleDescriptionChange" class="border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]" placeholder="Description"></textarea>
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="status" class="block text-green-800 text-[20px] font-inter">Status:</label>
        <ActiveCaseItems :statuses="['Active', 'Inactive']" v-model="status" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Seller ID</label>
        <input v-model="sellerId" @input="handleSellerIdChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Seller ID" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Brand Linkage</label>
        <input v-model="brandLinkage" @input="handleBrandLinkageChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Brand Linkage" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label class="text-[20px] font-inter">Categories Linkage</label>
        <input v-model="categoriesLinkage" @input="handleCategoriesLinkageChange" @focus="isFocused = true" @blur="isFocused = false" :class="[
        'border border-green-800 hover:border-green-500 rounded-md bg-slate-100 p-5 w-[350px] h-[50px]', 
        isFocused ? 'shadow-sm shadow-green-600' : 'hover:shadow-sm hover:shadow-green-600']"
        placeholder="Categories Linkage" />
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="pinCode" class="block text-green-800 text-[20px] font-inter">PinCode :</label>
        <ActiveCasePinCode :statuses="['520002', '520001']" v-model="pinCode" />
      </div>
    </form>
    <itemsTable />
  </div>
</template>