<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const open = ref(true);
const name = "Bmbastha";

const isOverVIewTabOpen = ref(true);
const isHomeTabOpen = ref(false);
const isProfileTabOpen = ref(false);
const isNotificationTabOpen=ref(false);

const toggleOverVIewTab = () => {
  isOverVIewTabOpen.value = true;
  isHomeTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value=false;
};

const toggleHomeTab = () => {
  isHomeTabOpen.value = true;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value=false;
};

const toggleProfileTab = () => {
  isHomeTabOpen.value = false;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = true;
  isNotificationTabOpen.value=false;
};
const toggleNotificationTab = () => {
  isHomeTabOpen.value = false;
  isOverVIewTabOpen.value = false;
  isProfileTabOpen.value = false;
  isNotificationTabOpen.value=true;
};

onMounted(() => {
  if (route.path.startsWith("/banners") || route.path.startsWith("/brands") || route.path.startsWith("/items") || route.path.startsWith("/layers") ){
    toggleHomeTab();
  } else if (route.path.startsWith("/OverVIew")) {
    toggleOverVIewTab();
  } else if (route.path.startsWith("/promotional") || route.path.startsWith("/helpcenter")){
    toggleProfileTab();
  } else if (route.path.startsWith("/notifications")) {
    toggleNotificationTab()
  }
});
</script>

<template>
  <div class="flex h-screen">
    <div class="w-20 bg-green-900 h-full">
      <img src="../../assets/images/Bm.svg" class="lg:p-5 w-full bg-green-700" alt="Logo" />
        <img
        src="../../assets/images/overview.svg"
        @click="toggleOverVIewTab"
        class="cursor-pointer lg:p-5 transition-colors duration-300"
        :class="isOverVIewTabOpen ? 'bg-[#159947]' : 'bg-transparent'"
        alt="OverVIew"
      />
      <img
        src="../../assets/images/home.svg"
        @click="toggleHomeTab"
        class="cursor-pointer lg:p-6 transition-colors duration-300"
        :class="isHomeTabOpen ? 'bg-[#159947]' : 'bg-transparent'"
        alt="Home"
      />
      <img
        src="../../assets/images/Profile.svg"
        @click="toggleProfileTab"
        class="cursor-pointer lg:p-6 transition-colors duration-300"
        :class="isProfileTabOpen ? 'bg-[#159947]' : 'bg-transparent'"
        alt="Home"
      />
      <img
        src="../../assets/images/notifications.svg"
        @click="toggleNotificationTab"
        class="cursor-pointer lg:p-2 transition-colors duration-300"
        :class="isNotificationTabOpen ? 'bg-[#159947]' : 'bg-transparent'"
        alt="Home"
      />
    </div>
    <div class="w-[250px] h-full">
      <SideBarMenu :isOverVIewTabOpen="isOverVIewTabOpen" :isHomeTabOpen="isHomeTabOpen" :isProfileTabOpen="isProfileTabOpen" :isNotificationTabOpen="isNotificationTabOpen"/>
    </div>
  </div>
</template>
