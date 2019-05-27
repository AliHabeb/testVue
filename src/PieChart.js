import { Pie } from "vue-chartjs";
// import "hartjs-plugin-piechart-outlabels"
import "chartjs-plugin-piechart-outlabels"
export default {
  extends: Pie,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, this.options);
  }
};
