import { defineStore } from 'pinia'

import { ordersData } from '@/fake-data/orders'

export const useOrder = defineStore('order', () => {
  const { $t } = useI18n()

  const table = reactive({
    dtData: ordersData,
    spinner: false,
    pager: {
      totals: 2
    },
    params: {
      sort: ['sort', 'asc'],
      searches: {}
    }
  })

  async function remove({ rows, name }) {
    const { default: Swal2, baseSwal } = await import('@/libs/swal')
    const Swal = new Swal2('DEL')
    const { h, render } = await import('vue')

    const parentDiv = document.createElement('div')

    const isSingleDeleteTextNode = h('div', [
      h('span', $t('confirm.removeText')),
      h('span', { class: 'badge text-bg-light font-medium-2 fw-normal text-secondary' }, name),
      h('span', '?')
    ])

    render(isSingleDeleteTextNode, parentDiv)

    const html = parentDiv.innerHTML

    Swal.showConfirmationDialog({ html }, async () => {
      return true
    })
  }

  function reset() {
    Object.assign(table, {
      dtData: [],
      spinner: false,
      pager: {
        totals: 0
      },
      params: {
        sort: ['sort', 'asc'],
        searches: {}
      }
    })
  }

  return { table, remove, reset }
})
