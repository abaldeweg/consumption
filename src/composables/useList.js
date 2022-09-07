import { ref } from 'vue'

export const lists = ref(
  JSON.parse(localStorage.getItem('consumption_list')) || []
)

export function useList() {
  const save = () => {
    localStorage.setItem('consumption_list', JSON.stringify(lists.value))
  }

  const create = () => {
    lists.value.unshift({
      date: Math.round(Date.now() / 1000),
      resources: [],
      notes: null,
    })
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

  const addItem = (id, item) => {
    let index = getIndex(id, item)
    if (index === -1) {
      lists.value[id].resources.push({ name: item, counter: 1 })
    }
    if (index >= 0) {
      lists.value[id].resources[index].counter++
    }
    save()
  }

  const getItem = (id, item) => {
    let index = getIndex(id, item)

    return lists.value[id].resources[index]
  }

  const getIndex = (id, item) => {
    return lists.value[id].resources.findIndex((el) => el.name === item)
  }

  const setNotes = (id, notes) => {
    lists.value[id].notes = notes
    save()
  }

  return { lists, create, remove, clear, addItem, getItem, setNotes }
}
