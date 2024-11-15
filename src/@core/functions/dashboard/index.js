import ECharts from '@/libs/echarts'

export default class Charts extends ECharts {
  pie(data) {
    const options = {
      legend: {
        show: true,
        textStyle: {
          fontSize: 16
        },
        orient: 'vertical',
        left: 10,
        top: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        valueFormatter(value) {
          return value + ' 筆'
        }
      },
      series: [
        {
          type: 'pie',
          data: data,
          label: {
            position: 'inner',
            formatter: '{b}\n({d}%)',
            lineHeight: 25,
            fontSize: 16
          }
        }
      ]
    }

    this.setOption(options)
  }

  line({ xAxis, data }) {
    const legendData = data.map(item => item.name)

    const options = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: legendData,
        textStyle: {
          fontSize: 16
        }
      },
      xAxis: {
        type: 'category',
        data: xAxis,
        axisLabel: {
          fontSize: '1rem'
        }
      },
      yAxis: {
        type: 'value',
        name: '筆',
        nameTextStyle: {
          fontSize: '1rem'
        },
        axisLabel: {
          fontSize: '1rem'
        }
      },
      series: data
    }

    this.setOption(options)
  }
}
