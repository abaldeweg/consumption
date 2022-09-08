import { onMounted, ref } from 'vue'

const lists = ref(null)

export function useList() {
  // Lists
  const load = () => {
    lists.value = JSON.parse(localStorage.getItem('consumption_list')) || []
  }

  onMounted(load)

  const save = () => {
    localStorage.setItem('consumption_list', JSON.stringify(lists.value))
  }

  const create = () => {
    lists.value['l-' + Math.round(Date.now() / 1000)] = {
      date: Math.round(Date.now() / 1000),
      resources: [],
      notes: null,
    }
    save()
  }

  const remove = (id) => {
    lists.value.splice(id, 1)
    save()
  }

  const clear = () => {
    lists.value = []
    localStorage.removeItem('consumption_list')
  }

  // Items
  const addItem = (id, item) => {
    lists.value[id].resources.push(item)
    save()
  }

  const removeItem = (list, item) => {
    lists.value[list].resources.splice(item, 1)
    save()
  }

  const increaseCounter = (list, item) => {
    lists.value[list].resources[item].counter++
    save()
  }

  const decreaseCounter = (list, item) => {
    lists.value[list].resources[item].counter--
    save()

    if (lists.value[list].resources[item].counter <= 0) {
      removeItem(list, item)
    }
  }

  const setNotes = (id, notes) => {
    lists.value[id].notes = notes
    save()
  }

  return {
    lists,
    create,
    remove,
    clear,
    addItem,
    increaseCounter,
    decreaseCounter,
    setNotes,
  }
}
