<template>
  <div class="bg-slate-100 h-screen overflow-y-auto overflow-x-auto p-8">
    <div class="flex justify-between border-b-2 border-green-800 py-4">
      <div class="flex flex-row text-green-800 items-center gap-2">
        <div class="bg-green-900 rounded-full text-white p-4 flex">
          <Icon size="35" name="material-symbols-light:layers" />
        </div>
        <div class="flex flex-col gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Notifications</span>
        </div>
      </div>
    </div>
    <div class="w-[800px] text-green-800 bg-slate-100 m-auto p-10">
      <h2 class="text-3xl pb-5">Add New Notification</h2>
      <form @submit.prevent="addNotification">
        <div class="mb-4">
          <label for="logoUrl" class="block pb-1 text-xl font-poppins">Notification Logo URL:</label>
          <input
            v-model="newNotification.logoUrl"
            id="logoUrl"
            type="url"
            class="border border-green-800 hover:border-green-600 bg-slate-50 p-2 w-full rounded-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="title" class="block pb-1 text-xl font-poppins">Title:</label>
          <input
            v-model="newNotification.title"
            id="title"
            type="text"
            class="border border-green-800 hover:border-green-600 bg-slate-50 p-2 w-full rounded-sm"
            required
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block pb-1 text-xl font-poppins">Description:</label>
          <textarea
            v-model="newNotification.description"
            id="description"
            class="border border-green-800 hover:border-green-600 bg-slate-50 p-2 w-full rounded-sm"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="url" class="block pb-1 text-xl font-poppins">Notification URL:</label>
          <input
            v-model="newNotification.url"
            id="url"
            type="url"
            class="border border-green-800 hover:border-green-600 bg-slate-50 p-2 w-full rounded-sm"
            required
          />
        </div>
        <button type="submit" class="bg-green-300 border border-green-800 p-4 rounded-full fixed top-12 right-12 items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
        <Correct />
      </button>
      </form>
    </div>
    <h2 class="text-xl font-semibold mt-8 mb-4">All Notifications</h2>
    <table class="max-w-screen overflow-x-auto bg-white border border-gray-300">
      <thead class="bg-green-800 text-white">
        <tr>
          <th class="px-4 py-2">Logo</th>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">URL</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(notification, index) in notifications" :key="index" class="border-b">
          <td class="px-4 py-2">
            <img :src="notification.logoUrl" alt="Logo" class="w-8 h-8 object-cover rounded-full" />
          </td>
          <td class="px-4 py-2">{{ notification.title }}</td>
          <td class="px-4 py-2">{{ notification.description }}</td>
          <td class="px-4 py-2 max-w-xs truncate overflow-hidden" title="Click to view full URL">
            <a :href="notification.url" target="_blank" class="text-blue-500 hover:underline">{{ notification.url }}</a>
          </td>
          <td class="px-4 py-2">
            <button @click="editNotification(index)" class="text-slate-50 bg-green-800 py-2 px-5 hover:bg-green-600 duration-300 rounded-sm mr-2">Edit</button>
            <button @click="deleteNotification(index)" class="text-slate-50 py-2 px-5 bg-red-800 duration-300 hover:bg-red-500 rounded-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';

const notifications = ref([
  {
    logoUrl: 'https://via.placeholder.com/50',
    title: 'Maintenance Update',
    description: 'Scheduled maintenance will occur on 15th December.',
    url: 'https://www.example.com/maintence'
  },
  {
    logoUrl: 'https://via.placeholder.com/50',
    title: 'New Feature Announcement',
    description: 'We have introduced a new feature on our platform.',
    url: 'https://www.example.com/features'
  }
]);

const newNotification = ref({
  logoUrl: '',
  title: '',
  description: '',
  url: ''
});

const addNotification = () => {
  if (newNotification.value.logoUrl && newNotification.value.title && newNotification.value.description && newNotification.value.url) {
    notifications.value.push({
      logoUrl: newNotification.value.logoUrl,
      title: newNotification.value.title,
      description: newNotification.value.description,
      url: newNotification.value.url
    });

    newNotification.value = {
      logoUrl: '',
      title: '',
      description: '',
      url: ''
    };
  }
};

const editNotification = (index) => {
  const notification = notifications.value[index];
  newNotification.value = { ...notification };
  notifications.value.splice(index, 1);
};
const deleteNotification = (index) => {
  notifications.value.splice(index, 1);
};
</script>

  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    text-align: left;
  }
  </style>
  