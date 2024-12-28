<template>
    <div class="h-screen bg-slate-100 p-8">
      <div class="flex justify-between">
        <h1 class="text-green-800 text-2xl font-bold">Delivery Panel</h1>
        <div
          class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer"
          @click="addOrder"
        >
          <Correct />
        </div>
      </div>
  
      <div class="mt-8 flex flex-col">
        <div class="flex gap-4">
          <div class="w-[450px]">
            <label for="order-id" class="block text-green-800 font-semibold">Order ID:</label>
            <input
              type="text"
              id="order-id"
              v-model="newOrder.id"
              placeholder="Enter Order ID"
              class="w-full border border-green-800 p-2 h-[65px] rounded-md"
            />
          </div>
          <div>
            <label for="edit-status" class="text-lg text-green-800">Status:</label>
            <ActiveCaseDelivery :statuses="['Order Placed', 'Order Accepted', 'On Progress', 'Out for Delivery', 'Delivered']" v-model="newOrder.status" />
          </div>
        </div>
      </div>
  
      <table class="mt-8 w-full bg-white rounded-lg border border-gray-300 shadow-md">
        <thead class="bg-green-800 text-white">
          <tr>
            <th class="p-4 text-left">Order ID</th>
            <th class="p-4 text-left">Status</th>
            <th class="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td class="p-4">{{ order.id }}</td>
            <td class="p-4">
              <ActiveCaseDelivery :statuses="['Order Placed', 'Order Accepted', 'On Progress', 'Out for Delivery', 'Delivered']" v-model="order.status" />
            </td>
            <td class="p-4">
              <button
                @click="editOrder(index)"
                class="bg-blue-700 text-white py-1 px-3 rounded-md hover:bg-blue-500 duration-300"
              >
                Edit
              </button>
              <button
                @click="deleteOrder(index)"
                class="ml-4 bg-red-700 text-white py-1 px-3 rounded-md hover:bg-red-500 duration-300"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';  
  const orders = ref<{ id: string; status: string }[]>([]);
  const newOrder = ref<{ id: string; status: string }>({ id: '', status: 'Order Placed' });
  const editingIndex = ref<number | null>(null);
  
  const addOrder = () => {
    if (newOrder.value.id.trim() !== '') {
      if (editingIndex.value !== null) {
        orders.value[editingIndex.value] = { ...newOrder.value };
        editingIndex.value = null;
      } else {
        orders.value.push({ ...newOrder.value });
      }
      newOrder.value.id = '';
      newOrder.value.status = 'Order Placed';
    } else {
      alert('Please enter a valid Order ID.');
    }
  };
  
  const editOrder = (index: number) => {
    editingIndex.value = index;
    newOrder.value = { ...orders.value[index] };
  };
  
  const deleteOrder = (index: number) => {
    orders.value.splice(index, 1);
    if (editingIndex.value === index) {
      editingIndex.value = null;
      newOrder.value = { id: '', status: 'Order Placed' };
    }
  };
  </script>
  
  <style scoped>
  .bg-slate-100 {
    background-color: #f8fafc;
  }
  .bg-green-800 {
    background-color: #065f46;
  }
  .bg-green-300 {
    background-color: #6ee7b7;
  }
  .hover\:bg-green-400:hover {
    background-color: #34d399;
  }
  .border-green-800 {
    border-color: #065f46;
  }
  </style>
  