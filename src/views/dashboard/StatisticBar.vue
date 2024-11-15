<script setup>
const statisticsData = [
  {
    number: '$3,450,000',
    unit: '新台幣',
    label: '總營業額'
  },
  {
    number: '+90',
    unit: '人',
    label: '客量'
  },
  {
    number: 350,
    unit: '人',
    label: '平台預定'
  },
  {
    number: 150,
    unit: '人',
    label: '電話預訂'
  }
]
</script>

<template>
  <div class="card card-wrapper border-0">
    <div class="card-body">
      <div class="row g-4">
        <h4 class="mb-0">本月業績成長</h4>

        <div v-for="data in statisticsData" class="col-lg-3 col-sm-6 col-12">
          <div class="card single-card mb-0 shadow-none">
            <h3 class="card-header pb-2 justify-content-start">
              {{ data.number }} <small class="ms-2">({{ data.unit }})</small>
            </h3>
            <div class="card-body pt-0">{{ data.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card.card-wrapper {
  background-image: url('../../assets/images/bg/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card.single-card {
  background-color: #ffffffb4;
  border-color: #eff5fb;
}
</style>
