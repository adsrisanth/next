<script setup lang="ts">
import { ref } from 'vue';
import Modal from '~/components/itemsModal.vue';

const items = ref([
  {
    id: 1,
    logo: null,
    tags: ['tag1', 'tag2'],
    price: 100,
    discount: 10,
    expiryDate: '2024-12-31',
    maniDate: '2024-01-01',
    netWeight: '500g',
    noPieces: 10,
    modelName: 'Model 1',
    type: 'Type A',
    pack: 'Pack A',
    description: 'Description of item 1',
    status: 'active',
    sellerId: 'Seller1',
    brandLinkage: 'Brand A',
    categoriesLinkage: 'Category A',
  },
]);

const isModalOpen = ref(false);
const selectedItem = ref(null);

const openModal = (item = null) => {
  selectedItem.value = item
    ? { ...item }
    : {
        id: items.value.length + 1,
        logo: null,
        tags: [],
        price: 0,
        discount: 0,
        expiryDate: '',
        maniDate: '',
        netWeight: '',
        noPieces: 0,
        modelName: '',
        type: '',
        pack: '',
        description: '',
        status: 'active',
        sellerId: '',
        brandLinkage: '',
        categoriesLinkage: '',
      };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleSave = (item) => {
  const existingItemIndex = items.value.findIndex((i) => i.id === item.id);
  if (existingItemIndex !== -1) {
    items.value[existingItemIndex] = item;
  } else {
    items.value.push(item);
  }
  closeModal();
};
</script>

<template>
  <div @click="openModal" class="bg-green-800 text-white px-4 py-2">Add New Item</div>
  <table class="min-w-full bg-white mt-5">
    <thead>
      <tr>
        <th>Item ID</th>
        <th>Item Logo</th>
        <th>Item Tags</th>
        <th>Item Price</th>
        <th>Item Discount</th>
        <th>Expiry Date</th>
        <th>Manufacture Date</th>
        <th>Net Weight</th>
        <th>No. Pieces</th>
        <th>Model Name</th>
        <th>Type</th>
        <th>Pack</th>
        <th>Description</th>
        <th>Status</th>
        <th>Seller ID</th>
        <th>Brand Linkage</th>
        <th>Categories Linkage</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td><img :src="item.logo" alt="Logo" v-if="item.logo" class="w-10 h-10" /></td>
        <td>{{ item.tags.join(', ') }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.discount }}</td>
        <td>{{ item.expiryDate }}</td>
        <td>{{ item.maniDate }}</td>
        <td>{{ item.netWeight }}</td>
        <td>{{ item.noPieces }}</td>
        <td>{{ item.modelName }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.pack }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.sellerId }}</td>
        <td>{{ item.brandLinkage }}</td>
        <td>{{ item.categoriesLinkage }}</td>
        <td>
          <button @click="openModal(item)" class="bg-green-800 hover:bg-green-950 duration-300 rounded-md text-white px-4 py-2">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>

  <Modal 
    :isOpen="isModalOpen" 
    :close="closeModal" 
    :item="selectedItem" 
    @save="handleSave" 
  />
</template>
