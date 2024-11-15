import { shallowRef } from 'vue'

export function useState(initState) {
  const state = shallowRef(initState)

  function update(newValue) {
    state.value = newValue
  }

  return [state, update]
}
