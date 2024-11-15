import { emptyOption } from './config'
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, PieChart } from 'echarts/charts'
import 'echarts/lib/component/markPoint'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components'

echarts.use([
  CanvasRenderer,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent
])

export default class ECharts {
  constructor(chart) {
    if (!chart) {
      throw new Error('Chart instance is required')
    }

    this.chart = chart
  }

  setOption(options) {
    this.chart.setOption(options)

    this.setLoading(false)
  }

  setLoading(state) {
    if (state) {
      this.clear()
      this.chart.chart.showLoading()

      return
    }

    this.chart.chart.hideLoading()
  }

  clear() {
    this.chart.clear()
  }

  setEmpty() {
    this.clear()

    this.chart.setOption(emptyOption)

    this.setLoading(false)
  }
}
