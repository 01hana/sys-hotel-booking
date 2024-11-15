export const pieChartData = [
  { value: 120, name: '電話' },
  { value: 50, name: 'Booking' },
  { value: 30, name: 'Agoda' }
]

export const lineChartData = {
  xAxis: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月'],
  data: [
    {
      name: '電話',
      type: 'line',
      stack: 'Total',
      data: [20, 32, 50, 34, 90, 30, 10, 85, 90]
    },
    {
      name: 'Booking',
      type: 'line',
      stack: 'Total',
      data: [15, 40, 63, 42, 80, 15, 20, 75, 30]
    },
    {
      name: 'Agoda',
      type: 'line',
      stack: 'Total',
      data: [35, 40, 68, 57, 42, 50, 16, 20, 80]
    }
  ]
}
