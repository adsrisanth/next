<template>
    <div class="order-card">
      <div class="order-info">
        <strong>{{ order.name }}</strong>
        <p>Delivery to: {{ order.address }}</p>
        <p>Order Date: {{ order.date }}</p>
      </div>
      <div class="order-actions">
        <input type="checkbox" :value="order.id" @change="selectOrder" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, emit } from 'vue'
  
  const props = defineProps({
    order: Object,
  })
  
  const emitSelectOrder = (order) => {
    emit('selectOrder', order)
  }
  
  const selectOrder = () => {
    emitSelectOrder(props.order)
  }
  </script>
  
  <style scoped>
  .order-card {
    width: 250px;
    padding: 10px;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
  
  .order-info {
    margin-bottom: 10px;
  }
  
  .order-actions {
    text-align: right;
  }
  </style>
  