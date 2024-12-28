<template>
  <div class="h-screen bg-slate-100 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-green-800 items-center gap gap-2">
        <div class="bg-green-900 rounded-full text-white p-4 flex">
          <Icon size="35" name="gis:earth-network" />
        </div>
        <div class="flex flex-col gap gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">GIF</span>
        </div>
      </div>
    </div>
    <div class="p-8 flex flex-row justify-evenly">
      <div class="h-[90px] text-green-900">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Gif URL</span>
          <div class="border w-[350px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
            <input
              type="text"
              v-model="gifURL"
              placeholder="Enter Gif URL"
              class="w-full bg-transparent text-green-800 outline-none"
              aria-label="Gif URL"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-8">
      <div class="flex flex-col gap gap-3">
        <label for="statuspromotion" class="block mt-4 text-green-900 text-[20px] font-inter">Status:</label>
        <ActiveCase :statuses="['Active', 'Inactive']" v-model="statuspromotion" />
      </div>
    </div>

    <!-- Submit Button as <Correct /> Component -->
    <div class="pt-8">
      <div
        class="bg-green-300 border border-green-800 p-4 rounded-full fixed top-10 right-10 items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer "
        @click="addOrEditData"
      >
        <Correct />
      </div>
    </div>

    <!-- Table to Display the GIFs -->
    <div class="mt-8 overflow-x-auto">
      <table class="min-w-full table-auto text-green-800">
        <thead>
          <tr class="border-b">
            <th class="p-2 text-left">Gif ID</th>
            <th class="p-2 text-left">Gif Image</th>
            <th class="p-2 text-left">Status</th>
            <th class="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(gif, index) in gifList" :key="index" class="border-b">
            <td class="p-2">{{ gif.gifID }}</td>
            <td class="p-2">
              <img :src="gif.gifURL" alt="GIF" class="w-16 h-16 object-cover" />
            </td>
            <td class="p-2">{{ gif.statuspromotion }}</td>
            <td class="p-2">
              <button
                class="bg-blue-500 text-white p-1 rounded-md mr-2"
                @click="editData(index)"
              >
                Edit
              </button>
              <button
                class="bg-red-500 text-white p-1 rounded-md"
                @click="deleteData(index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pb-10 text-slate-300">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Store the list of GIF entries
const gifList = ref<{ gifID: string; gifURL: string; statuspromotion: string }[]>([]);

// Store the form input fields
const gifURL = ref('');
const statuspromotion = ref('Active');

// Track the next ID to assign to new GIFs
let nextID = 1;
let editingIndex = ref<number | null>(null); // Keeps track of the index being edited

// Method to add or edit a GIF entry
const addOrEditData = () => {
  // Prevent duplicates by checking if the gifURL already exists
  const isDuplicate = gifList.value.some(gif => gif.gifURL === gifURL.value);
  
  if (isDuplicate) {
    alert("This GIF URL already exists. Please enter a unique URL.");
    return;
  }

  // If editing, update the selected GIF
  if (editingIndex.value !== null) {
    const gif = gifList.value[editingIndex.value];
    gif.gifURL = gifURL.value;
    gif.statuspromotion = statuspromotion.value;

    // Clear the editing index and form fields
    editingIndex.value = null;
    gifURL.value = '';
    statuspromotion.value = 'Active';
  } else {
    // Add a new GIF if no entry is being edited
    const formattedID = `#${String(nextID).padStart(5, '0')}`;
    if (gifURL.value) {
      gifList.value.push({
        gifID: formattedID,
        gifURL: gifURL.value,
        statuspromotion: statuspromotion.value,
      });

      // Increment the ID for the next entry
      nextID++;

      // Clear the form fields
      gifURL.value = '';
      statuspromotion.value = 'Active';
    }
  }
};

// Method to edit an existing GIF entry
const editData = (index: number) => {
  // Set the form fields to the selected entry's values
  const gif = gifList.value[index];
  gifURL.value = gif.gifURL;
  statuspromotion.value = gif.statuspromotion;

  // Set the editing index to the current index
  editingIndex.value = index;
};

// Method to delete a GIF entry
const deleteData = (index: number) => {
  gifList.value.splice(index, 1);
};
</script>

<style scoped>
/* Add any custom styling for your table here */
</style>
