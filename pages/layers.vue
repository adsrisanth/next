<template>
  <div class="h-screen overflow-y-auto bg-slate-100 p-8">
    <div class="flex justify-between">
      <div class="flex flex-row text-green-800 items-center gap-2">
        <div class="bg-green-900 rounded-full text-white p-4 flex">
          <Icon size="35" name="material-symbols-light:layers" />
        </div>
        <div class="flex flex-col gap-[1px]">
          <span class="text-sm">Main</span>
          <span class="text-[24px] font-inter">Layers</span>
        </div>
      </div>
      <div
        class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer"
        @click="addLayer"
      >
        <Correct />
      </div>
    </div>
    
    <div class="p-8 grid gap gap-5 grid-cols-2 justify-center">
      <div class="h-[90px] text-green-900">
        <div class="p-4 gap-3 flex flex-col">
          <span class="text-[20px] font-inter">Logo ID</span>
          <div class="border w-[450px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
            <input
              type="text"
              v-model="logoId"
              placeholder="Logo ID"
              class="w-full bg-transparent text-green-800 outline-none"
              aria-label="Logo ID"
            />
          </div>
        </div>
      </div>
      <div class="p-4 flex flex-col gap-3">
        <label for="status" class="block w-[450px] text-green-900 text-[20px] font-inter">Status:</label>
        <ActiveCase :statuses="['Active', 'Inactive']" v-model="status" />
      </div>
      <div class="p-4 text-green-900 flex flex-col gap-3">
        <span class="text-[20px] font-inter">Background Color</span>
        <input
          type="color"
          v-model="bgColor"
          class="pl-2 pr-2 pt-1 pb-1 w-[450px] h-[65px] border border-green-800 rounded"
          aria-label="Background Color"
        />
      </div>
      <div class="p-4 text-green-900 flex flex-col gap-3">
        <span class="text-[20px] font-inter">Inner Stroke Color</span>
        <input
          type="color"
          v-model="innerStrokeColor"
          class="pl-2 pr-2 pt-1 pb-1 w-[450px] h-[65px] border border-green-800 rounded"
          aria-label="Inner Stroke Color"
        />
      </div>
      <div class="p-4 text-green-900 flex flex-col gap-3">
        <span class="text-[20px] font-inter">Inner Background Color</span>
        <input
          type="color"
          v-model="innerBgColor"
          class="pl-2 pr-2 pt-1 pb-1 w-[450px] h-[65px] border border-green-800 rounded"
          aria-label="Inner Background Color"
        />
      </div>
      <div class="p-4 flex flex-col gap gap-3">
        <label for="axisStyle" class="block w-[450px] text-green-900 text-[20px] font-inter">Axis Style:</label>
        <ActiveCase :statuses="['Solid', 'Dashed', 'Dotted']" v-model="axisStyle" />
      </div>
    </div>
    <div class="mt-8">
      <table class="w-full bg-white rounded-lg border border-gray-300 shadow-md">
        <thead class="bg-green-800 text-white">
          <tr>
            <th class="p-4 text-left">Logo ID</th>
            <th class="p-4 text-left">Status</th>
            <th class="p-4 text-left">Background Color</th>
            <th class="p-4 text-left">Inner Stroke</th>
            <th class="p-4 text-left">Inner Background</th>
            <th class="p-4 text-left">Axis Style</th>
            <th class="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(layer, index) in layers" :key="index">
            <td class="p-4">{{ layer.logoId }}</td>
            <td class="p-4">{{ layer.status }}</td>
            <td class="p-4" :style="{ backgroundColor: layer.bgColor }"></td>
            <td class="p-4" :style="{ backgroundColor: layer.innerStrokeColor }"></td>
            <td class="p-4" :style="{ backgroundColor: layer.innerBgColor }"></td>
            <td class="p-4">{{ layer.axisStyle }}</td>
            <td class="p-4 flex gap-2">
              <button
                @click="editLayer(index)"
                class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
              >
                Edit
              </button>
              <button
                @click="deleteLayer(index)"
                class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const logoId = ref('');
const status = ref('Active');
const bgColor = ref('#135700');
const innerStrokeColor = ref('#135700');
const innerBgColor = ref('#135700');
const axisStyle = ref('Solid');

const layers = ref<{
  logoId: string;
  status: string;
  bgColor: string;
  innerStrokeColor: string;
  innerBgColor: string;
  axisStyle: string;
}[]>([]);

const addLayer = () => {
  if (logoId.value.trim() !== '') {
    layers.value.push({
      logoId: logoId.value,
      status: status.value,
      bgColor: bgColor.value,
      innerStrokeColor: innerStrokeColor.value,
      innerBgColor: innerBgColor.value,
      axisStyle: axisStyle.value,
    });
    clearInputs();
  } else {
    alert('Please enter a valid Logo ID.');
  }
};

const editLayer = (index: number) => {
  const layer = layers.value[index];
  logoId.value = layer.logoId;
  status.value = layer.status;
  bgColor.value = layer.bgColor;
  innerStrokeColor.value = layer.innerStrokeColor;
  innerBgColor.value = layer.innerBgColor;
  axisStyle.value = layer.axisStyle;
  layers.value.splice(index, 1);
};

const deleteLayer = (index: number) => {
  layers.value.splice(index, 1);
};

const clearInputs = () => {
  logoId.value = '';
  status.value = 'Active';
  bgColor.value = '#135700';
  innerStrokeColor.value = '#135700';
  innerBgColor.value = '#135700';
  axisStyle.value = 'Solid';
};
</script>

<style scoped>
.layer-bg {
  background-color: var(--bg-color);
  stroke: var(--stroke-color);
}
.layer-inner-bg {
  background-color: var(--inner-bg-color);
}
.axis-style {
  stroke-dasharray: var(--dash-array);
}
</style>
