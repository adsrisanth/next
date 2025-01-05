<template>
  <div>
    <!-- Task 1: Orders List -->
    <div class="orders-list">
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @selectOrder="handleOrderSelect"
      />
    </div>

    <!-- Task 3: Select Orders -->
    <div class="select-order">
      <input type="checkbox" v-model="selectedOrders" />
      <button @click="sendToDeliveryBoy">Send to Delivery Boy</button>
    </div>

    <!-- Task 4: Confirmation Popup -->
    <ConfirmPopup
      v-if="showConfirmPopup"
      :order="selectedOrder"
      @confirm="handleConfirm"
      @cancel="showConfirmPopup = false"
    />

    <!-- Task 6: Delivery Details Table -->
    <DeliveryTable :orders="assignedOrders" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import OrderCard from '@/components/OrderCard.vue'
import ConfirmPopup from '@/components/ConfirmPopup.vue'
import DeliveryTable from '@/components/DeliveryTable.vue'

const orders = ref([])
const selectedOrders = ref([])
const selectedOrder = ref(null)
const showConfirmPopup = ref(false)
const assignedOrders = ref([])

// Fetch orders from the backend
onMounted(async () => {
  const { data } = await axios.get('/api/orders')
  orders.value = data
})

// Handle Order Selection
const handleOrderSelect = (order) => {
  selectedOrder.value = order
  showConfirmPopup.value = true
}

// Handle Confirm Delivery
const handleConfirm = (deliveryBoy) => {
  assignedOrders.value.push({
    ...selectedOrder.value,
    deliveryBoy,
    status: 'Assigned',
  })
  showConfirmPopup.value = false
}

// Send orders to Delivery Boy
const sendToDeliveryBoy = () => {
  console.log('Selected Orders:', selectedOrders.value)
}
</script>

<style scoped>
.orders-list {
  display: flex;
  overflow-x: auto;
}

.select-order {
  margin-top: 20px;
}

button {
  margin-left: 10px;
}
</style>
