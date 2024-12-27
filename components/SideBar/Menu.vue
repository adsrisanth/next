<script setup>
import { ref, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  isOverVIewTabOpen: Boolean,
  isHomeTabOpen: Boolean,
  isProfileTabOpen : Boolean,
  isNotificationTabOpen : Boolean,
});

const route = useRoute();

const items = ref([
  {
    title: "Banners",
    path: "/banners",
    icon: "game-icons:vertical-banner",
  },
  {
    title: "Brands",
    path: "/brands",
    icon: "simple-icons:brandfolder",
  },
  {
    title: "Items",
    path: "/items",
    icon: "mdi:invoice-line-items-outline",
  },
  {
    title: "Layers",
    path: "/layers",
    icon: "material-symbols-light:layers",
  },
]);

const OverVIew = ref([
  {
    title: "OverView",
    path: "/",
    icon: "material-symbols:dashboard-outline",
  },
]);

const profile = ref([
  {
    title: "Promotional",
    path: "/promotion",
    icon: "gis:earth-network",
  },
  {
    title: "Help Center",
    path: "/helpcenter",
    icon: "humbleicons:aid",
  },
]);

const notifications = ref([
  {
    title:"Notifications",
    path:"/notifications",
    icon:"fa6-regular:bell",
  }
]);
</script>

<template>
  <div class="w-full h-full">
    <div v-if="props.isOverVIewTabOpen" class="bg-[#159947] h-full transition-all duration-300">
      <div class="font-oswald text-gray-300 text-xl h-20 bg-green-900 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4">
        <NuxtLink v-for="(category, index) in OverVIew" :key="index" :to="category.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-300 hover:bg-green-800 duration-300 text-xl',
              route.path === category.path ? 'bg-green-900' : ''
            ]"
          >
            <Icon size="20" :name="category.icon" color="white" class="mr-3" />
            <span>{{ category.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isHomeTabOpen" class="bg-[#159947] h-full transition-all duration-300">
      <div class="font-oswald text-gray-200 text-xl h-20 bg-green-900 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in items" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-200 hover:bg-green-800 duration-300 text-xl',
              route.path === item.path ? 'bg-green-900' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isProfileTabOpen" class="bg-[#159947] h-full transition-all duration-300">
      <div class="font-oswald text-gray-200 text-xl h-20 bg-green-900 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in profile" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-200 hover:bg-green-800 duration-300 text-xl',
              route.path === item.path ? 'bg-green-900' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-if="props.isNotificationTabOpen" class="bg-[#159947] h-full transition-all duration-300">
      <div class="font-oswald text-gray-200 text-xl h-20 bg-green-900 flex p-5 items-center text-center overflow-hidden">
        <span class="truncate">BmBastha</span>
      </div>
      <div class="p-4 flex flex-col gap-2">
        <NuxtLink v-for="(item, index) in notifications" :key="index" :to="item.path">
          <div
            :class="[
              'flex items-center py-3 px-5 rounded-lg font-poppins text-gray-200 hover:bg-green-800 duration-300 text-xl',
              route.path === item.path ? 'bg-green-900' : ''
            ]"
          >
            <Icon size="20" :name="item.icon" color="white" class="mr-3" />
            <span>{{ item.title }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
