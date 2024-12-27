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
        <div class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
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
                aria-label="Brand URL"
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
          <ActiveCase :statuses="['Solid', 'Dashed','Dotted']" v-model="axisStyle " />
        </div>
      </div>
      <div class="pb-10 text-slate-300">
        <brandTable />
      </div>
    </div>
  </template>

  <script setup lang="ts">  
  const loading = ref(false);
  const logoId = ref('');
  const status = ref('Active');
  const title = ref('');
  const bgColor = ref('#135700');
  const innerStrokeColor = ref('#135700');
  const innerBgColor = ref('#135700');
  const axisStyle = ref('Solid');
  const pinCode = ref('');
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
