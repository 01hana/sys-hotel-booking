<script setup>
import StatisticBar from './StatisticBar.vue'
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'
</script>

<template>
  <StatisticBar />

  <div class="row g-4">
    <div class="col-lg-5">
      <PieChart />
    </div>

    <div class="col-lg-7">
      <LineChart />
    </div>
  </div>
</template>
