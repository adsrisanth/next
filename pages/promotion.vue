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
        <div class="bg-green-300 border border-green-800 p-4 rounded-full flex items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
          <Correct />
        </div>
      </div>
      <div class="p-8 flex flex-row justify-evenly">
        <div class=" h-[90px] text-green-900">
          <div class="p-4 gap-3 flex flex-col">
            <span class="text-[20px] font-inter">Gif - ID</span>
            <div class="border w-[350px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
              <input
                type="text"
                v-model="gifID"
                placeholder="Enter Gif ID"
                class="w-full bg-transparent  text-green-800 outline-none"
                aria-label="Gif ID"
              />
            </div>
          </div>
        </div>
        <div class=" h-[90px] text-green-900">
          <div class="p-4 gap-3 flex flex-col">
            <span class="text-[20px] font-inter">Gif - URL</span>
            <div class="border w-[350px] border-green-800 hover:shadow-sm rounded-md hover:border-green-500 p-5">
              <input
                type="text"
                v-model="gifURL"
                placeholder="Enter Gif URL"
                class="w-full bg-transparent  text-green-800 outline-none"
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

      <div class="pb-10 text-slate-300">
        <bannerTable />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">  
  const loading = ref(false);
  const gifURL = ref('');
  const gifID = ref('');
  const statuspromotion = ref('Active');
  </script>
  