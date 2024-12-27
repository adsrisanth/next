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
import Modal from '~/components/brandModal.vue';

const isModalOpen = ref(false);
const selectedbrand = ref({ id: 1, status: 'Active', url: 'www.bmbastha.com' });

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleSave = (updatedbrand) => {
  console.log('Updated brand:', updatedbrand);
  selectedbrand.value = { ...selectedbrand.value, ...updatedbrand }; 
};
</script>

<template>
  <Table class="mt-10 text-green-800">
    <TableCaption>A list of Brands.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Brand ID</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>URL</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">{{ selectedbrand.id }}</TableCell>
        <TableCell>{{ selectedbrand.status }}</TableCell>
        <TableCell>{{ selectedbrand.url }}</TableCell>
        <TableCell>
          <Button @click="openModal" class="bg-slate-800 py-5 text-[12px] px-7 m-5">Edit</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  
  <Modal 
    :isOpen="isModalOpen" 
    :close="closeModal" 
    :brandId="selectedbrand.id" 
    :status="selectedbrand.status" 
    :url="selectedbrand.url" 
    @save="handleSave" />
</template>
