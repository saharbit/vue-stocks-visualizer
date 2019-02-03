<script>
import { Pie, mixins } from "vue-chartjs";
import { GET_CHART_DATA } from '../store/getter-types.js'
import { mapGetters } from 'vuex'
const {  } = mixins;

export default {
  extends: Pie,
  computed: {
    ...mapGetters({chartData: GET_CHART_DATA})
  },
  mounted() {
    this.renderChart(this.chartData);
  }
};
</script>

<style>
</style>
