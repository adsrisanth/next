<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  close: Function,
  item: Object,
});

const emit = defineEmits(['save']);

const editableItem = ref({ ...props.item });

watch(
  () => props.item,
  (newItem) => {
    editableItem.value = { ...newItem };
  }
);

const handleSubmit = () => {
  emit('save', editableItem.value);
};
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg w-96">
      <h2 class="text-lg font-semibold mb-4">Edit Item</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="price" class="block">Price</label>
          <input v-model="editableItem.price" type="number" class="border p-2 w-full" />
        </div>
        
        <div class="mb-4">
          <label for="status" class="block">Status</label>
          <select v-model="editableItem.status" class="border p-2 w-full">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div class="mt-4">
          <button type="button" @click="close" class="mr-2 bg-green-800 hover:bg-green-900 duration-200 rounded-md text-white px-4 py-2">Cancel</button>
          <button type="submit" class="bg-green-700 hover:bg-green-800 duration-200 rounded-md text-white px-4 py-2">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
