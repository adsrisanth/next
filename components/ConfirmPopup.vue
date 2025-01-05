<template>
    <div class="popup">
      <div class="popup-content">
        <h3>Confirm Order</h3>
        <p><strong>Name:</strong> {{ order.name }}</p>
        <p><strong>Delivery to:</strong> {{ order.address }}</p>
        <p><strong>Order Date:</strong> {{ order.date }}</p>
  
        <label for="deliveryBoy">Select Delivery Boy:</label>
        <select v-model="selectedBoy" id="deliveryBoy">
          <option value="1">Delivery Boy 1</option>
          <option value="2">Delivery Boy 2</option>
          <option value="3">Delivery Boy 3</option>
        </select>
  
        <div>
          <button @click="confirmDelivery">Confirm</button>
          <button @click="cancelPopup">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Define the 'confirm' and 'cancel' events using `defineEmits`
  const emit = defineEmits(['confirm', 'cancel'])
  
  // Define the order prop
  const props = defineProps({
    order: Object,
  })
  
  const selectedBoy = ref(null)
  
  // Handle Confirm Delivery
  const confirmDelivery = () => {
    emit('confirm', selectedBoy.value)  // Emit the selected delivery boy
  }
  
  // Handle Cancel Popup
  const cancelPopup = () => {
    emit('cancel')  // Emit the cancel event
  }
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  </style>
  