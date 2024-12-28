<template>
  <div class="h-screen overflow-y-auto bg-slate-100 p-8">
    <!-- Header Section -->
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
      <div class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer" @click="handleSubmit">
        <Correct />
      </div>
    </div>

    <!-- Form for Item Entry -->
    <form @submit.prevent="handleSubmit" class="grid grid-cols-3 gap-5 p-8 text-green-800">
      <!-- Item Logo URL -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Item Logo URL</label>
        <input v-model="itemLogo" placeholder="Enter Logo URL" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Price (₹) -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Price (₹)</label>
        <input type="number" v-model="itemPrice" min="1" placeholder="Price" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Discount (%) -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Discount (%)</label>
        <input type="number" v-model="itemDiscount" min="0" max="100" placeholder="Discount (%)" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Manufacturing Date -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Manufacturing Date</label>
        <input type="date" v-model="maniDate" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Expiry Date -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Expiry Date</label>
        <input type="date" v-model="expiryDate" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Net Weight -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Net Weight</label>
        <div class="flex gap-2">
          <input type="number" v-model="netWeight" min="1" placeholder="Net Weight" class="border border-green-800 rounded-sm p-4 input-field" />
          <select v-model="netWeightUnit" class="input-field">
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
          </select>
        </div>
      </div>

      <!-- Pack -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Pack</label>
        <input type="number" v-model="pack" min="1" placeholder="Pack" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Seller ID -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Seller ID</label>
        <input type="number" v-model="sellerId" min="1" placeholder="Seller ID" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Item Tags -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Item Tags</label>
        <input v-model="itemTags" placeholder="Item Tags" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- No. of Pieces -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">No. of Pieces</label>
        <input type="number" v-model="pieces" min="1" placeholder="No. of Pieces" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Model Name -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Model Name</label>
        <input v-model="modelName" placeholder="Model Name" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Type -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Type</label>
        <input v-model="type" placeholder="Type" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Description -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Description</label>
        <textarea v-model="description" placeholder="Description" class="border border-green-800 rounded-sm p-4 input-field"></textarea>
      </div>

      <!-- Status -->
      <div class="flex flex-col gap-3">
        <label for="statuspromotion" class="block text-green-900 text-[20px] font-inter">Status:</label>
        <ActiveCaseItems :statuses="['Active', 'Inactive']" v-model="statuspromotion" />
      </div>

      <!-- Brand Linkage -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Brand Linkage</label>
        <input v-model="brandLinkage" placeholder="Brand Linkage" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Categories Linkage -->
      <div class="flex flex-col gap-3">
        <label class="text-[20px] font-inter">Categories Linkage</label>
        <input v-model="categoriesLinkage" placeholder="Categories Linkage" class="border border-green-800 rounded-sm p-4 input-field" />
      </div>

      <!-- Pincode -->
      <div class="flex flex-col gap-3">
        <label for="statuspromotion" class="block text-green-900 text-[20px] font-inter">PinCode:</label>
        <ActiveCasePinCode :statuses="['522303', 'Inactive']" v-model="statuspromotion" />
      </div>
    </form>

    <!-- Table to Display Submitted Items -->
    <table class="table-auto w-full mt-6 bg-white border border-green-800">
      <thead>
        <tr class="bg-green-200">
          <th class="px-4 py-2 text-left">Item ID</th>
          <th class="px-4 py-2 text-left">Logo</th>
          <th class="px-4 py-2 text-left">Discount (%)</th>
          <th class="px-4 py-2 text-left">Final Price (₹)</th>
          <th class="px-4 py-2 text-left">Expiry Date</th>
          <th class="px-4 py-2 text-left">Seller ID</th>
          <th class="px-4 py-2 text-left">Quantity</th>
          <th class="px-4 py-2 text-left">Status</th>
          <th class="px-4 py-2 text-left">Pincode</th>
          <th class="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="px-4 py-2">{{ item.itemId }}</td>
          <td class="px-4 py-2">
            <img v-if="item.itemLogo" :src="item.itemLogo" alt="Item Logo" class="w-16 h-16 object-cover" />
          </td>
          <td class="px-4 py-2">{{ item.itemDiscount }}</td>
          <td class="px-4 py-2">{{ item.finalPrice }}</td>
          <td class="px-4 py-2">{{ item.expiryDate }}</td>
          <td class="px-4 py-2">{{ item.sellerId }}</td>
          <td class="px-4 py-2">{{ item.quantity }}</td>
          <td class="px-4 py-2">{{ item.status }}</td>
          <td class="px-4 py-2">{{ item.pincode }}</td>
          <td class="px-4 py-2">
            <button @click="editItem(index)" class="bg-yellow-300 p-2 rounded">Edit</button>
            <button @click="deleteItem(index)" class="bg-red-500 p-2 rounded text-white">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      itemIdCounter: 1,
      itemLogo: "",
      itemPrice: null,
      itemDiscount: 0,
      maniDate: "",
      expiryDate: "",
      netWeight: null,
      netWeightUnit: "g",
      pack: null,
      sellerId: null,
      itemTags: "",
      pieces: 1,
      modelName: "",
      type: "",
      description: "",
      statuspromotion: "Active",
      brandLinkage: "",
      categoriesLinkage: "",
      pincode: "522303",
      editingIndex: -1,
    };
  },
  methods: {
    handleSubmit() {
      // Validation for empty fields
      if (
        !this.itemLogo ||
        !this.itemPrice ||
        !this.itemDiscount ||
        !this.maniDate ||
        !this.expiryDate ||
        !this.netWeight ||
        !this.pack ||
        !this.sellerId ||
        !this.itemTags ||
        !this.pieces ||
        !this.modelName ||
        !this.type ||
        !this.description ||
        !this.statuspromotion ||
        !this.brandLinkage ||
        !this.categoriesLinkage
      ) {
        alert("Please fill in all fields");
        return;
      }

      // Validation for dates
      const manuDate = new Date(this.maniDate);
      const expDate = new Date(this.expiryDate);

      if (expDate <= manuDate) {
        alert("Expiry date must be later than the manufacturing date.");
        return;
      }

      // Validation for numeric values
      if (this.itemPrice <= 0 || this.netWeight <= 0 || this.pack <= 0 || this.sellerId <= 0 || this.pieces <= 0) {
        alert("Please provide valid numeric values.");
        return;
      }

      // Calculating final price after discount
      const finalPrice = this.itemPrice - (this.itemPrice * this.itemDiscount) / 100;

      const newItem = {
        itemId: ("000" + this.itemIdCounter).slice(-3),
        itemLogo: this.itemLogo,
        itemPrice: this.itemPrice,
        itemDiscount: this.itemDiscount,
        finalPrice: finalPrice,
        expiryDate: this.expiryDate,
        sellerId: this.sellerId,
        quantity: this.pieces,
        status: this.statuspromotion,
        pincode: this.pincode,
      };

      if (this.editingIndex === -1) {
        this.items.push(newItem);
      } else {
        this.items[this.editingIndex] = newItem;
      }

      this.resetForm();
    },

    resetForm() {
      // Reset form fields
      this.itemLogo = "";
      this.itemPrice = null;
      this.itemDiscount = 0;
      this.maniDate = "";
      this.expiryDate = "";
      this.netWeight = null;
      this.pack = null;
      this.sellerId = null;
      this.itemTags = "";
      this.pieces = 1;
      this.modelName = "";
      this.type = "";
      this.description = "";
      this.statuspromotion = "Active";
      this.brandLinkage = "";
      this.categoriesLinkage = "";
      this.pincode = "522303";
      this.editingIndex = -1;
      this.itemIdCounter++;
    },

    editItem(index) {
      const item = this.items[index];
      this.itemLogo = item.itemLogo;
      this.itemPrice = item.itemPrice;
      this.itemDiscount = item.itemDiscount;
      this.maniDate = item.maniDate;
      this.expiryDate = item.expiryDate;
      this.netWeight = item.netWeight;
      this.pack = item.pack;
      this.sellerId = item.sellerId;
      this.itemTags = item.itemTags;
      this.pieces = item.pieces;
      this.modelName = item.modelName;
      this.type = item.type;
      this.description = item.description;
      this.statuspromotion = item.statuspromotion;
      this.brandLinkage = item.brandLinkage;
      this.categoriesLinkage = item.categoriesLinkage;
      this.pincode = item.pincode;

      this.editingIndex = index;
    },

    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.input-field {
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
}
</style>
