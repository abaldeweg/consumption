import { ref } from '@vue/composition-api'

export const consumptions = ref(
  JSON.parse(localStorage.getItem('consumption')) || { lists: [] }
)

export default function useList() {
  const save = () => {
    localStorage.setItem('consumption', JSON.stringify(consumptions.value))
  }

  const create = () => {
    consumptions.value.lists.unshift({
      date: Math.round(Date.now() / 1000),
      resources: [],
    })
    save()
  }

  const remove = (id) => {
    consumptions.value.lists.splice(id, 1)
    save()
  }

  const clear = () => {
    consumptions.value.lists = []
    localStorage.removeItem('consumption')
  }

  const addItem = (id, item) => {
    let index = getIndex(id, item)
    if (index === -1) {
      consumptions.value.lists[id].resources.push({ name: item, counter: 1 })
    }
    if (index >= 0) {
      consumptions.value.lists[id].resources[index].counter++
    }
    save()
  }

  const getItem = (id, item) => {
    let index = getIndex(id, item)

    return consumptions.value.lists[id].resources[index]
  }

  const getIndex = (id, item) => {
    return consumptions.value.lists[id].resources.findIndex(
      (el) => el.name === item
    )
  }

  return { consumptions, create, remove, clear, addItem, getItem }
}
