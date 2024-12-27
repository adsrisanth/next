<template>
  <div class="h-screen bg-slate-100 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-green-800 items-center gap gap-2">
        <div class="bg-green-900 rounded-full text-white p-4 flex">
          <Icon size="35" name="game-icons:vertical-banner" />
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Banners</span>
        </div>
      </div>
      <div
        class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer"
        @click="addBanner"
      >
        <Correct />
      </div>
    </div>
    <div class="p-8 flex flex-row justify-evenly">
      <div class="h-[90px] text-green-900">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Banner - URL</span>
          <div class="border w-[450px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
            <input
              type="text"
              v-model="bannerUrl"
              placeholder="Enter Banner URL"
              class="w-full bg-transparent text-green-800 outline-none"
              aria-label="Banner URL"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap gap-3">
        <label for="status" class="block mt-4 w-[450px] text-green-900 text-[20px] font-inter">Status:</label>
        <ActiveCase :statuses="['Active','Inactive']" v-model="status" />
      </div>
    </div>
    <div class="p-8">
      <table class="min-w-full bg-white rounded-lg border border-gray-300 shadow-md">
        <thead class="bg-green-800 text-white">
          <tr>
            <th class="p-4 text-left">Sl. No.</th>
            <th class="p-4 text-left">Banner URL</th>
            <th class="p-4 text-left">Status</th>
            <th class="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(banner, index) in banners" :key="index">
            <td class="p-4">{{ index + 1 }}</td> 
            <td class="p-4">{{ banner.url }}</td>
            <td class="p-4">{{ banner.status }}</td>
            <td class="p-4">
              <button
                @click="openEditModal(index)"
                class="bg-green-800 hover:bg-green-600 duration-300 text-slate-50 py-2 px-4 rounded-sm font-medium"
              >
                Edit
              </button>
              <button
                @click="deleteBanner(index)"
                class="bg-red-700 duration-300 px-4 py-2 text-slate-50 rounded-sm hover:bg-red-500 font-medium ml-4"
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
        <h3 class="text-2xl font-inter text-green-800 mb-4">Edit Banner</h3>
        <div class="flex flex-col gap-4">
          <div>
            <label for="edit-url" class="text-lg text-green-800">Banner URL:</label>
            <input
              id="edit-url"
              type="text"
              v-model="editBannerUrl"
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
            class="bg-gray-300 px-4 py-2 rounded-md duration-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            @click="saveChanges"
            class="bg-green-800 duration-300 text-white px-4 py-2 rounded-md hover:bg-green-600"
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

const bannerUrl = ref('');
const status = ref('Active');
const banners = ref<{ url: string; status: string }[]>([]);
const showModal = ref(false);
const editBannerUrl = ref('');
const editStatus = ref('Active');
const editIndex = ref<number | null>(null);
const addBanner = () => {
  if (bannerUrl.value.trim() !== '' && status.value) {
    banners.value.push({ url: bannerUrl.value, status: status.value });
    bannerUrl.value = '';
    status.value = 'Active';
  } else {
    alert('Please fill in both fields.');
  }
};
const openEditModal = (index: number) => {
  const bannerToEdit = banners.value[index];
  editBannerUrl.value = bannerToEdit.url;
  editStatus.value = bannerToEdit.status;
  editIndex.value = index;
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
  editBannerUrl.value = '';
  editStatus.value = 'Active';
};
const saveChanges = () => {
  if (editIndex.value !== null) {
    banners.value[editIndex.value] = { url: editBannerUrl.value, status: editStatus.value };
    closeModal();
  }
};
const deleteBanner = (index: number) => {
  banners.value.splice(index, 1);
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

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
