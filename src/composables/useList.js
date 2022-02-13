import { ref } from '@vue/composition-api'

export const consumptions = ref(
  JSON.parse(localStorage.getItem('consumption')) || { lists: [] }
)

export default function useList() {
  const save = () => {
    localStorage.setItem('consumption', JSON.stringify(consumptions.value))
  }

  const create = () => {
    consumptions.value.lists.push({
      date: Math.round(Date.now() / 1000),
      resources: [],
    })
    save()
  }

  const remove = (id) => {
    consumptions.value.lists.splice(id, 1)
    save()
  }

  const add = (id, item) => {
    consumptions.value.lists[id].resources.push(item)
    save()
  }

  return { consumptions, create, remove, add }
}
