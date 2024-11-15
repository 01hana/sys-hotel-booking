import VxeUI from 'vxe-pc-ui'

export default class Dt {
  static stores

  constructor(stores) {
    this.stores = stores
  }

  $resetSelect = () => {
    const { table } = this.stores

    table.select.count = 0
    table.ref.clearCheckboxRow()
  }

  $resetSearch = () => {
    const { table } = this.stores

    if (!Object.hasOwn(table.params, 'searches')) return

    table.params.searches = {}
  }

  $resetFilters = () => {
    const { table } = this.stores

    if (!Object.hasOwn(table.params, 'filters')) return

    const filterColumns = table.ref.getCheckedFilters()

    filterColumns.forEach(column => table.ref.clearFilter(column.field))

    table.params.filters = {}
  }

  dtClear = () => {
    const { table } = this.stores

    table.ref.clearAll()
  }

  $setSort = () => {
    const { table } = this.stores

    let field = table.params.sort[0]
    let order = table.params.sort[1]

    if (table.ref.getSortColumns().length > 0) {
      const { field, order } = table.ref.getSortColumns()[0]

      table.ref.sort(field, order)

      return
    }

    if (Object.hasOwn(table.params, 'defaultSort')) {
      field = table.params.defaultSort[0]
      order = table.params.defaultSort[1]
    }

    table.ref.sort(field, order)
  }

  setTable(res) {
    if (!res) return

    const { table } = this.stores

    table.dtData = res.data

    table.params.p = res.p
    table.pager.totals = res.totals

    this.$setSort()
  }

  selectVisible = isSelectBatch => {
    const { table } = this.stores

    const column = table.ref.getColumnByField('select')

    if (isSelectBatch.value) {
      table.ref.hideColumn(column)

      this.$resetSelect()
    } else {
      table.ref.showColumn(column)
    }

    isSelectBatch.value = !isSelectBatch.value
  }

  searchSubmit = data => {
    const { table, getTable } = this.stores

    this.$resetSearch()

    table.params.p = 1
    table.params.searches.keyword = data.keyword

    // getTable()
  }

  dtReset = searchForm => {
    const { table, getTable } = this.stores

    this.$resetSearch()
    this.$resetFilters()

    searchForm.resetForm()

    table.params.p = 1

    // getTable()
  }

  sortChange = ({ column, triggerResizable, triggerSort, triggerFilter }) => {
    if (!column.sortable || triggerResizable || triggerSort || triggerFilter) return

    const { table, getTable } = this.stores

    if (table.params.sort.length > 0 && !Object.hasOwn(table.params, 'defaultSort')) {
      table.params.defaultSort = [table.params.sort[0], table.params.sort[1]]
    }

    switch (column.order) {
      case 'desc':
        column.field === table.params.defaultSort[0]
          ? table.ref.sort(column.field, 'asc')
          : table.ref.clearSort()
        break
      case 'asc':
        table.ref.sort(column.field, 'desc')
        break
      default:
        table.ref.sort(column.field, 'asc')
    }

    const isCustomSort = table.ref.getSortColumns().length > 0

    let field, order

    if (!isCustomSort && Object.hasOwn(table.params, 'defaultSort')) {
      field = table.params.defaultSort[0]
      order = table.params.defaultSort[1]
    }

    if (isCustomSort) {
      const { field: changedField, order: changedOrder } = table.ref.getSortColumns()[0]

      field = changedField
      order = changedOrder
    }

    table.params.sort = [field, order]

    getTable()
  }

  filterChange = column => {
    const { table } = this.stores
    const { getTable } = this.stores
    const { field, values } = column

    table.params.p = 1

    table.params.filters[field] = values

    if (values.length <= 0) delete table.params.filters[field]

    getTable()
  }

  selectChange = row => {
    const { table } = this.stores

    table.select.count = row.records.length
  }

  pageParams = () => {
    const { table } = this.stores

    table.params.p = table.params.p || VxeUI.Pager.props.currentPage.default
    table.params.length = table.params.length || VxeUI.Pager.props.pageSize.default()
  }

  pageChange = type => {
    const { table } = this.stores
    const { getTable } = this.stores

    table.params.p = type.currentPage
    table.params.length = type.pageSize

    getTable()
  }

  remove = (row, name) => {
    const { remove } = this.stores

    const params = { rows: [row], name, isMultiple: false }

    remove(params)
  }

  removeBatch = () => {
    const { table } = this.stores
    const { remove } = this.stores

    if (table.select.count <= 0) return

    const records = table.ref.getCheckboxRecords()

    const rows = records.map(item => item.id)

    const params = { rows, isMultiple: true }

    remove(params)
  }

  actionBatch = (type, value) => {
    const { table } = this.stores
    const { actions } = this.stores

    if (table.select.count <= 0) return

    const records = table.ref.getCheckboxRecords()

    const rows = records.map(item => item.id)

    const params = { type, value, rows }

    actions(params)
  }
}
