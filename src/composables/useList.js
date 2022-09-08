import { ref } from 'vue'

const lists = ref(JSON.parse(localStorage.getItem('consumption_list')) || [])

export function useList() {
  const save = () => {
    localStorage.setItem('consumption_list', JSON.stringify(lists.value))
  }

  const addItem = (id, item) => {
    lists.value[id].resources.push(item)
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

  return { lists, addItem, getItem, setNotes }
}
