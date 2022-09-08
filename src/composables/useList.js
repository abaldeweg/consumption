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

  const getIndex = (id, item) => {
    return lists.value[id].resources.findIndex((el) => el.name === item)
  }

  const setNotes = (id, notes) => {
    lists.value[id].notes = notes
    save()
  }

  return { lists, addItem, getItem, increaseCounter, decreaseCounter, setNotes }
}
