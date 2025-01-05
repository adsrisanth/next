import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    assignedOrders: [],
  }),
  actions: {
    setOrders(orders) {
      this.orders = orders
    },
    assignOrder(order, deliveryBoy) {
      this.assignedOrders.push({
        ...order,
        deliveryBoy,
        status: 'Assigned',
      })
    },
  },
})
