export const tableConfig = {
  table: {
    border: true,
    round: true,
    filterConfig: { remote: true },
    sortConfig: {
      remote: true,
      iconAsc: 'bi bi-caret-up-fill',
      iconDesc: 'bi bi-caret-down-fill'
    },
    rowConfig: { isHover: true },
    columnConfig: { resizable: true },
    checkboxConfig: { highlight: true, range: true }
  },
  pager: {
    pageSize: 35,
    pageSizes: [35, 50, 100, 150],
    layouts: [
      'PrevJump',
      'PrevPage',
      'Number',
      'NextPage',
      'NextJump',
      'Sizes',
      'FullJump',
      'Total'
    ]
  }
}

export const iconConfig = {
  TABLE_EXPAND_OPEN: 'bi bi-dash-circle-fill',
  TABLE_EXPAND_CLOSE: 'bi bi-plus-circle-fill',
  PAGER_JUMP_PREV: 'bi bi-chevron-bar-left',
  PAGER_JUMP_NEXT: 'bi bi-chevron-bar-right',
  PAGER_PREV_PAGE: 'bi bi-chevron-left',
  PAGER_NEXT_PAGE: 'bi bi-chevron-right',
  PAGER_JUMP_MORE: 'vxe-icon-ellipsis-h'
}
