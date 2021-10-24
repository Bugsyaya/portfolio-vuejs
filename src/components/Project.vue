<template>
  <div id="project">
    <h1>{{project.name}} ({{project.id}})</h1>
    <PieChart ref="skills_chart" :data="chartData" :options="chartOptions" ></PieChart>
  </div>
</template>

<script>
import * as api from '../api'
import PieChart from "./PieChart.vue"
import randomColor from 'randomcolor'

export default {
  name: 'Project',
  components: {
      PieChart
  },
  data () {
    return {
        project: {},
        chartOptions: {
            hoverBorderWidth: 20
        },
        chartData: {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: [],
            datasets: [
            {
                label: "Data One",
                backgroundColor: [],
                data: []
            }
            ]
        }
    }
  },
  created () {
        this.getProjectByName(),
        this.getProjectLanguageByName()
  },
  computed: {
    currentDataSet () {
      return this.chartData.datasets[0].data
    }
  },
  methods : {
        getProjectByName(){
            api.getProjectByName(this.$route.params.name).then(response => {
                this.project = response.data
            })
        },
        async getProjectLanguageByName() {
            const result = await api.getProjectLanguageByName(this.$route.params.name)

            console.log(result.data)

            this.chartData.labels = Object.keys(result.data)
            this.chartData.datasets[0].data = Object.values(result.data)
            this.chartData.datasets[0].backgroundColor = Object.keys(result.data).map(() => randomColor())
            this.$refs.skills_chart.update();
        }
  }
}
</script>

<style>
</style>
