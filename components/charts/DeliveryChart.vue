<template>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from "vue";
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default defineComponent({
    name: "DeliveryChart",
    setup() {
      const chartCanvas = ref(null);
  
      onMounted(() => {
        if (chartCanvas.value) {
          const ctx = chartCanvas.value.getContext("2d");
          new Chart(ctx, {
            type: "bar",
            data: {
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              datasets: [
                {
                  label: "Delivery",
                  data: [12, 19, 3, 5, 2],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          });
        }
      });
  
      return { chartCanvas };
    },
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  

  canvas {
    max-height: 400px;
    max-width: 500px;
  }
  </style>