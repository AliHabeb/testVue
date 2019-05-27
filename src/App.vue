<template>
  <div id="app">
   <pie-chart :data="chartData" :option="options"></pie-chart>
  </div>
</template>

<script>
import PieChart from "./PieChart.js";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartData: {
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
      options:{
            zoomOutPercentage: 20, // makes chart 40% smaller (50% by default, if the preoprty is undefined)
            plugins: {
                legend: false,
                outlabels: {
                    text: '%l',
                    color: 'white',
                    stretch: 30,
                    font: {
                        resizable: true,
                        minSize: 12,
                        maxSize: 18
                    }
                }
            }
        },
      responsive:true,
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
