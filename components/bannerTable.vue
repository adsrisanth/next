<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ref } from 'vue';
import Modal from '~/components/bannerModal.vue';

const isModalOpen = ref(false);
const selectedBanner = ref({ id: 1, status: 'Active', url: 'www.bmbastha.com' });

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleSave = (updatedBanner) => {
  console.log('Updated Banner:', updatedBanner);
  selectedBanner.value = { ...selectedBanner.value, ...updatedBanner }; 
};
</script>

<template>
  <Table class="mt-10 text-green-800 hover:bg-slate-200">
    <TableCaption>A list of Banners.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Banner ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>URL</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">{{ selectedBanner.id }}</TableCell>
        <TableCell>{{ selectedBanner.status }}</TableCell>
        <TableCell>{{ selectedBanner.url }}</TableCell>
        <TableCell>
          <Button @click="openModal" class="bg-green-800 py-5 text-[12px] px-7 m-5">Edit</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  
  <Modal 
    :isOpen="isModalOpen" 
    :close="closeModal" 
    :bannerId="selectedBanner.id" 
    :status="selectedBanner.status" 
    :url="selectedBanner.url" 
    @save="handleSave" />
</template>
