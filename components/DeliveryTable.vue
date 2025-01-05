<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Delivery Boy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.name }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.deliveryBoy }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="downloadCSV">Download CSV</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    orders: Array,
  })
  
  const downloadCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,'
      + 'Name,Address,Delivery Boy,Status\n'
      + props.orders.map(order => 
          `${order.name},${order.address},${order.deliveryBoy},${order.status}`
        ).join('\n')
  
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'orders.csv')
    document.body.appendChild(link)
    link.click()
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  </style>
  