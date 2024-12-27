<template>
  <div class="h-screen bg-slate-100 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-green-800 items-center gap gap-2">
        <div class="bg-green-900 rounded-full text-white p-4 flex">
          <Icon size="35" name="simple-icons:brandfolder" />
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Brands</span>
        </div>
      </div>
      <div
        class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer"
        @click="addBrand"
      >
        <Correct />
      </div>
    </div>
    <div class="p-8 flex flex-row justify-evenly">
      <div class="h-[90px] text-green-900">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Brand - URL</span>
          <div class="border w-[450px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
            <input
              type="text"
              v-model="brandUrl"
              placeholder="Enter Brand URL"
              class="w-full bg-transparent text-green-800 outline-none"
              aria-label="Brand URL"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="status" class="block mt-4 w-[450px] text-green-900 text-[20px] font-inter">Status:</label>
        <ActiveCase :statuses="['Active', 'Inactive']" v-model="status" />
      </div>
    </div>
    <div class="p-8">
      <table class="min-w-full bg-white rounded-lg border border-gray-300 shadow-md">
        <thead class="bg-green-800 text-white">
          <tr>
            <th class="p-4 text-left">Sl. No.</th>
            <th class="p-4 text-left">Brand URL</th>
            <th class="p-4 text-left">Status</th>
            <th class="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(brand, index) in brands" :key="index">
            <td class="p-4">{{ index + 1 }}</td> 
            <td class="p-4">{{ brand.url }}</td>
            <td class="p-4">{{ brand.status }}</td>
            <td class="p-4">
              <button
                @click="openEditModal(index)"
                class="text-white py-2 px-4 rounded-sm hover:bg-green-600 duration-300 bg-green-800 font-medium"
              >
                Edit
              </button>
              <button
                @click="deleteBrand(index)"
                class="py-2 duration-300 hover:bg-red-500 px-4 bg-red-600 rounded-sm text-white font-medium ml-4"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h3 class="font-inter text-green-800 text-2xl mb-4">Edit Brand</h3>
        <div class="flex flex-col gap-4">
          <div>
            <label for="edit-url" class="text-lg text-green-800">Brand URL:</label>
            <input
              id="edit-url"
              type="text"
              v-model="editBrandUrl"
              class="w-full bg-transparent border h-[65px] border-green-800 px-5 rounded-md"
            />
          </div>
          <div>
            <label for="edit-status" class="text-lg text-green-800">Status:</label>
            <ActiveCase :statuses="['Active', 'Inactive']" v-model="editStatus" />
          </div>
        </div>
        <div class="flex justify-end mt-4 gap-4">
          <button
            @click="closeModal"
            class="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 duration-300"
          >
            Cancel
          </button>
          <button
            @click="saveChanges"
            class="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-600 duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const brandUrl = ref('');
const status = ref('Active');
const brands = ref<{ url: string; status: string }[]>([]);
const showModal = ref(false);
const editBrandUrl = ref('');
const editStatus = ref('Active');
const editIndex = ref<number | null>(null);

const addBrand = () => {
  if (brandUrl.value.trim() !== '' && status.value) {
    brands.value.push({ url: brandUrl.value, status: status.value });
    brandUrl.value = '';
    status.value = 'Active';
  } else {
    alert('Please fill in both fields.');
  }
};

const openEditModal = (index: number) => {
  const brandToEdit = brands.value[index];
  editBrandUrl.value = brandToEdit.url;
  editStatus.value = brandToEdit.status;
  editIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  editBrandUrl.value = '';
  editStatus.value = 'Active';
};

const saveChanges = () => {
  if (editIndex.value !== null) {
    brands.value[editIndex.value] = { url: editBrandUrl.value, status: editStatus.value };
    closeModal();
  }
};

const deleteBrand = (index: number) => {
  brands.value.splice(index, 1);
};
</script>

<style scoped>
.fixed {
  position: fixed;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.z-50 {
  z-index: 50;
}

.w-[500px] {
  width: 500px;
}

.bg-white {
  background-color: white;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 12px 16px;
}

</style>
