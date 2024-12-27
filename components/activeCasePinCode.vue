<template>
    <div class="relative w-[350px]">
      <div
        class="border bg-slate-100 text-slate-700 border-green-800 h-[50px] rounded p-3 cursor-pointer"
        @click="toggleDropdown"
        :class="{'bg-slate-100': isDropdownOpen, 'border-green-700': isFocused, 'bg-green-100': isFocused}"
        @focus="isFocused = true"
        @blur="isFocused = false"
        tabindex="0"
      >
        {{ selectedStatus }} <span class="float-right">▼</span>
      </div>
      <ul v-if="isDropdownOpen" class="absolute z-10 w-full bg-slate-100 border border-green-700 text-gray-950 rounded shadow-lg">
        <li
          v-for="status in statuses"
          :key="status"
          @click="selectStatus(status)"
          class="hover:bg-green-600 p-4 cursor-pointer"
        >
          {{ status }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    statuses: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  const isDropdownOpen = ref(false);
  const selectedStatus = ref(props.modelValue || 'Select Status');
  const isFocused = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const selectStatus = (status: string) => {
    selectedStatus.value = status;
    emit('update:modelValue', status);
    isDropdownOpen.value = false;
  };
  </script>
  
  <style scoped>
  ul {
    max-height: 200px;
    overflow-y: auto;
  }
  </style>
  