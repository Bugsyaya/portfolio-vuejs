<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props:['data','options'],
  methods: {
    update() {
      this.$data._chart.update()
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
};
</script>