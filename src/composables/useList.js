import { ref } from 'vue'

const KEY_NAME = 'consumption_lists'
const lists = ref(JSON.parse(localStorage.getItem(KEY_NAME)) || {})

export function useList() {
  // Lists
  const save = () => {
    localStorage.setItem(KEY_NAME, JSON.stringify(lists.value))
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
    lists.value = {}
    localStorage.removeItem(KEY_NAME)
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
