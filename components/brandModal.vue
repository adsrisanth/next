<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center text-[14px] justify-center bg-black bg-opacity-50">
    <div class="bg-green-800 w-[520px] rounded-lg p-10 shadow-lg">
      <h2 class="text-lg font-semibold">Edit Brand</h2>
      <form @submit.prevent="handleSubmit">
        <label for="brandId" class="block mt-4 ">Brand ID:</label>
        <input
          v-model="brandId"
          type="text"
          id="brandId"
          class="border rounded text-green-800 bg-slate-100 p-2 w-full"
          readonly
        />

        <label for="status" class="block mt-4">Status:</label>
        <div class="relative">
          <div
            class="border text-slate-200 rounded p-2 w-full bg-green-800 cursor-pointer"
            @click="toggleDropdown"
            :class="{'bg-green-800': isDropdownOpen}"
          >
            {{ status }} <span class="float-right">▼</span>
          </div>
          <ul v-if="isDropdownOpen" class="absolute z-10 w-full bg-gray-100 border border-gray-400 rounded shadow-lg">
            <li @click="selectStatus('Active')" class="hover:bg-gray-300 hover:text-green-800 text-green-600 p-3 cursor-pointer">Active</li>
            <li @click="selectStatus('Inactive')" class="hover:bg-gray-200 hover:text-green-800 text-green-700 border-t border-slate-600 p-3 cursor-pointer">Inactive</li>
          </ul>
        </div>

        <label for="url" class="block mt-4">URL:</label>
        <input
          v-model="url"
          type="text"
          id="url"
          class="border text-green-800 bg-gray-100 rounded p-2 w-full"
        />

        <div class="mt-4">
          <button type="button" @click="closeModal" class="mr-2 bg-white hover:text-white hover:bg-green-800 border border-white duration-500 text-green-800 rounded px-5 py-2">Cancel</button>
          <button type="submit" class="bg-green-950 hover:text-slate-200 hover:bg-green-700 duration-500 text-white rounded px-5 py-2">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  isOpen: boolean;
  close: () => void;
  brandId: number;
  status: string;
  url: string;
}>();

const emit = defineEmits(['save']); 

const brandId = ref(props.brandId);
const status = ref(props.status);
const url = ref(props.url);

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectStatus = (value) => {
  status.value = value;
  isDropdownOpen.value = false; 
};

const handleSubmit = () => {
  emit('save', { brandId: brandId.value, status: status.value, url: url.value });
  closeModal(); 
};

const closeModal = () => {
  props.close();
};
</script>

<style scoped>
ul {
  max-height: 200px;
  overflow-y: auto;
}
</style>
