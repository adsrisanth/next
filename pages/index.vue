<script setup lang="ts">
import CustomerChart from '~/components/charts/CustomerChart.vue';
import DeliveryChart from '~/components/charts/DeliveryChart.vue';
import ItemsChart from '~/components/charts/ItemsChart.vue';
import OrdersChart from '~/components/charts/OrdersChart.vue';



</script>

<template>
    <div class="h-screen bg-slate-100">
        <div class="flex gap gap-8 p-8 flex-wrap overflow-y-auto h-screen justify-center">
            <div class="border-2 rounded-lg  w-[520px] h-[500px] flex flex-col justify-center items-center">
                <h2 class="text-2xl text-green-800 font-semibold mb-4 pt-2">Orders</h2>
                <OrdersChart />
              </div>
            <div class="border-2 rounded-lg  w-[520px] h-[500px] flex flex-col justify-center items-center">
                <h2 class="text-2xl text-green-800 font-semibold mb-4 pt-2">Customers</h2>
                <CustomerChart />
            </div>
            <div class="border-2 rounded-lg  w-[520px] h-[500px] flex flex-col justify-center items-center">
                <h2 class="text-2xl text-green-800 font-semibold mb-4 pt-2">Items</h2>
                <ItemsChart />
              </div>
              <div class="border-2 rounded-lg  w-[520px] h-[500px] flex flex-col justify-center items-center">
                <h2 class="text-2xl text-green-800 font-semibold mb-4 pt-2">Delivery</h2>
                <DeliveryChart />
              </div>
        </div>
    </div>
</template>