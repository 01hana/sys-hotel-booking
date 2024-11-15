<script setup>
import VChart from 'vue-echarts'

import Charts from '@core/functions/dashboard'

import { lineChartData } from '@/fake-data/charts'

const chartRef = shallowRef(null)

onMounted(() => setChart())

async function setChart() {
  const charts = new Charts(chartRef.value)

  charts.setLoading(true)

  await charts.line(lineChartData)

  //   charts.setLoading(false)
}
</script>

<template>
  <div class="card mb-0 border-0">
    <h4 class="card-header">每月成長</h4>
    <div class="card-body">
      <VChart ref="chartRef" class="chart" :loading autoresize />
    </div>
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
