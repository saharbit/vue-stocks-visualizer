<script>
import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'PieChart',
  extends: Pie,
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData);
  }
};
</script>

<style></style>
